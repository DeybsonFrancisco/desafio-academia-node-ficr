const Axios = require("axios");

const getGitHubUser = async user => {
    try {
        const data = await Axios.get(`https://api.github.com/users/${user}`);
        return data;
    } catch (err) {
        return err;
    }
};

module.exports = getGitHubUser;
