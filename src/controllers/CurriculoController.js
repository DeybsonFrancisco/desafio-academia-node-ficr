const GitHub = require("../services/GitHub");

exports.getCurriculo = async (req, res, next) => {
    try {
        // eslint-disable-next-line camelcase
        const { name, html_url, bio, company } = await GitHub.getGitHubUser(
            req.params.user
        );
        const user = {
            name,
            html_url,
            bio,
            company
        };
        const repositories = await GitHub.getGitHubRepo(req.params.user);
        return res.status(200).json({
            user: user,
            repositories: repositories
        });
    } catch (err) {
        next(err);
    }
};
