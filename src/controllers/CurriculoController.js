const GitHub = require("../services/GitHub");
const { ErrorHandler } = require("../helpers/ErrorHelper");

exports.getCurriculo = async (req, res, next) => {
    try {
        const result = await Promise.all([
            GitHub.getGitHubUser(req.params.user),
            GitHub.getGitHubRepo(req.params.user)
        ]);
        if (result[0].response.data.message) {
            throw new ErrorHandler(
                result[0].response.data,
                result[0].response.data.message
            );
        }
        let user, repositories;
        if (result[0].response.data.message !== null) {
            // eslint-disable-next-line camelcase
            const { name, html_url, bio, company } = result[0];
            user = {
                name,
                html_url,
                bio,
                company
            };
        } else {
            user: "Usuario não possui github";
        }

        if (result[1].response.data.message !== null) {
            repositories = result[1];

            const filterRepo = repositories.map(obj => {
                return {
                    size: obj.size,
                    name: obj.name,
                    url: obj.html_url
                };
            });

            const [rep1, rep2, rep3] = filterRepo;
            repositories = [rep1, rep2, rep3];
        } else {
            repositories: "não existem repositorios";
        }
        return res.status(200).json({
            user: user,
            repositories: repositories
        });
    } catch (err) {
        next(err);
    }
};
