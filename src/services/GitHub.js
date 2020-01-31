const Axios = require("axios");

const getGitHubUser = async () => {
    try {
        const data = await Axios.get(
            `https://api.github.com/users/${process.env.USER_GIT}`,
            {
                headers: {
                    Authorization: "Bearer ".concat(
                        "3cfdb9f3008f712a10caacbe9904b495fb814822"
                    )
                }
            }
        );
        return data.data;
    } catch (err) {
        return err;
    }
};
const getGitHubRepo = async user => {
    try {
        const data = await Axios.get(
            `https://api.github.com/users/${process.env.USER_GIT}/repos?direction=desc`,
            {
                headers: {
                    Authorization: "Bearer ".concat(
                        "3cfdb9f3008f712a10caacbe9904b495fb814822"
                    )
                }
            }
        );
        );
        return data.data;
    } catch (err) {
        return err;
    }
};

module.exports = { getGitHubUser, getGitHubRepo };
