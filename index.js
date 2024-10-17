const axios = require('axios');

const GITHUB_API_URL = 'https://api.github.com';

async function fetchPublicRepositories(username) {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
}

async function getDeployedRepos(username) {
    const repos = await fetchPublicRepositories(username);
    const deployedRepos = [];

    for (const repo of repos) {
        const repoName = repo.name;

        // Check if repo has a 'homepage' field, which could be a deployment URL
        if (repo.homepage) {
            deployedRepos.push({
                name: repoName,
                url: repo.homepage,
            });
        } else {
            // Check if GitHub Pages is enabled (for projects with GitHub Pages deployment)
            const ghPagesUrl = `https://${username}.github.io/${repoName}`;
            deployedRepos.push({
                name: repoName,
                url: ghPagesUrl,
            });
        }
    }

    return deployedRepos;
}

// Export the function as a module
module.exports = {
    getDeployedRepos,
};
