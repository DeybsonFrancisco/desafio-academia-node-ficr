const Octokit = require("@octokit/rest");

const octokit = new Octokit({
    auth: process.env.GIT_TOKEN
});

module.exports = octokit;
const getGitHubUser = async () => {
    try {
        const data = await octokit.request("/user");
        return data.data;
    } catch (err) {
        return console.log(err);
    }
};
const getGitHubRepo = async user => {
    try {
        const data = await octokit.request("/user/repos");
        return data.data;
    } catch (err) {
        return err;
    }
};

module.exports = { getGitHubUser, getGitHubRepo };
