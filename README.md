
# GitHub Deployed Repos

**GitHub Deployed Repos** is an npm package that retrieves all public repositories for a specified GitHub username and lists the URLs for the ones that are deployed (via GitHub Pages, or if the homepage URL is set in the repository).

## Features

- 📝 Fetches public repositories for any GitHub user.
- 🚀 Lists deployed URLs for repositories with a homepage set in their `package.json`.
- 🌐 Supports GitHub Pages URLs for repositories that are deployed via GitHub Pages.

## Installation

You can install this package using npm:

```bash
npm install github-deployed-repos
```

## Usage

To use this package, you simply need to require it and pass the GitHub username to fetch the deployed repositories.

### Example:

```javascript
// Import the getDeployedRepos function from the package
const { getDeployedRepos } = require('github-deployed-repos');

// Define the GitHub username
const username = 'your-github-username'; // Replace with the GitHub username you want to query

// Fetch and display deployed repositories
getDeployedRepos(username).then((deployedRepos) => {
    console.log('Deployed Repositories:');
    deployedRepos.forEach((repo) => {
        console.log(`- ${repo.name}: ${repo.url}`);
    });
}).catch((error) => {
    console.error('Error fetching deployed repositories:', error);
});
```

### Output Example:

```bash
Deployed Repositories:
- my-repo-1: https://my-repo-1.github.io
- my-repo-2: https://my-custom-domain.com
```

### How It Works

- The function `getDeployedRepos(username)` makes a request to GitHub's API to fetch all public repositories of the user.
- It checks if the `homepage` field in the `package.json` is set (this usually represents the deployment URL of the repository).
- If no `homepage` is found, it attempts to construct the GitHub Pages URL (`https://<username>.github.io/<repo-name>`).

## API

### `getDeployedRepos(username)`

Fetches deployed repositories for the given GitHub username.

- **Parameters:**
  - `username`: The GitHub username (string) for which you want to fetch public repositories.
  
- **Returns:** A Promise that resolves to an array of objects, each representing a deployed repository:

  ```json
  [
    {
      "name": "repo-name",
      "url": "https://deployed-url.com"
    }
  ]
  ```

### Example:

```javascript
getDeployedRepos('MrSanjayRaj').then((repos) => console.log(repos));
```

## Error Handling

If an error occurs (e.g., invalid username, GitHub API issues), the Promise will be rejected. You can handle it using `.catch()`:

```javascript
getDeployedRepos('invalid-username')
  .then((repos) => console.log(repos))
  .catch((error) => console.error('Error fetching deployed repositories:', error));
```

## Requirements

- **Node.js** version 12 or higher.
- **GitHub account** with public repositories.

## Contributing

Contributions are welcome! Please open an issue or a pull request if you would like to contribute.

### Steps to Contribute:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Example Output

Here is what you can expect when the function is called:

```bash
Deployed Repositories:
- Portfolio: https://MrSanjayRaj.github.io/portfolio
- Blog: https://myblog.com
```

