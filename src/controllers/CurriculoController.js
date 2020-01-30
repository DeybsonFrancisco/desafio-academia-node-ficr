const GitHub = require("../services/GitHub");
const Facebook = require("../services/Facebook");
const { ErrorHandler } = require("../helpers/ErrorHelper");

exports.getCurriculo = async (req, res, next) => {
    try {
        const result = await Promise.all([
            GitHub.getGitHubUser(req.params.user),
            GitHub.getGitHubRepo(req.params.user),
            Facebook()
        ]);

        let userGit, repositories, userFace;

        if (!result[0].response) {
            // eslint-disable-next-line camelcase
            const { name, html_url, bio, company } = result[0];
            userGit = {
                name,
                html_url,
                bio,
                company
            };
        } else {
            user: "Usuario não possui github";
        }

        if (!result[1].response) {
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
        if (!result[2].response) {
            const { name, birthday, email, location } = result[2];
            userFace = {
                name,
                birthday,
                email,
                location: location.name
            };
        }
        return res.status(200).json({
            userGit,
            repositories,
            userFace
        });
    } catch (err) {
        next(err);
    }
};
