const Axios = require("axios");

const getGitHubUser = async user => {
    try {
        const data = await Axios.get(`https://api.github.com/users/${user}`);
        return data.data;
    } catch (err) {
        return err;
    }
};
const getGitHubRepo = async user => {
    try {
        const data = await Axios.get(
            `https://api.github.com/users/${user}/repos?direction=desc`
        );
        return data.data;
    } catch (err) {
        return err;
    }
};

module.exports = { getGitHubUser, getGitHubRepo };
