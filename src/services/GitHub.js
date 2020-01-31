const Axios = require("axios");

const getGitHubUser = async () => {
    try {
        const data = await Axios.get(
            `https://api.github.com/users/${process.env.USER_GIT}`
        );
        return data.data;
    } catch (err) {
        return err;
    }
};
const getGitHubRepo = async user => {
    try {
        const data = await Axios.get(
            `https://api.github.com/users/${process.env.USER_GIT}/repos?direction=desc`
        );
        return data.data;
    } catch (err) {
        return err;
    }
};

module.exports = { getGitHubUser, getGitHubRepo };
