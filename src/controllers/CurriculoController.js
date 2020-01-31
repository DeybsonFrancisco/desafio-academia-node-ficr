const GitHub = require("../services/GitHub");
const Facebook = require("../services/Facebook");
const FileHelper = require("../helpers/FileHelper");

const path = require("path");

exports.getCurriculo = async (req, res, next) => {
    try {
        const result = await Promise.all([
            await GitHub.getGitHubUser(),
            await GitHub.getGitHubRepo(),
            Facebook(),
            FileHelper.get({
                path: path.resolve(__dirname, "..", "..", "formacao.json")
            })
        ]);

        console.log(result[1]);
        // eslint-disable-next-line camelcase
        const { avatar_url, html_url, company, bio } = result[0];
        const userGit = {
            avatar_url,
            html_url,
            bio,
            company
        };

        const data = result[1];

        const filterRepo = data.map(obj => {
            return {
                size: obj.size,
                name: obj.name,
                url: obj.html_url
            };
        });

        const orderRepos = filterRepo.sort((a, b) => {
            if (a.size < b.size) {
                return 1;
            } else if (a.size > b.size) {
                return -1;
            } else {
                return 0;
            }
        });
        const [rep1, rep2, rep3] = orderRepos;
        const repositories = [rep1, rep2, rep3];

        const { name, birthday, email, location, gender } = result[2];
        const userFace = {
            name,
            birthday,
            email,
            location: location.name,
            gender
        };

        const infoExp = result[3];

        return res.status(200).json({
            nome: userFace.name,
            data_nascimento: userFace.birthday,
            endereco: userFace.location,
            email: userFace.email,
            genero: userFace.gender,
            bio: userGit.bio || null,
            foto: userGit.avatar_url || null,
            formacao: infoExp.formacao,
            experiencia_profissional: infoExp.experiencia_profissional,
            github: {
                perfil: userGit.html_url,
                alguns_repositorios: [
                    repositories[0],
                    repositories[1],
                    repositories[2]
                ]
            }
        });
    } catch (err) {
        next(err);
    }
};
