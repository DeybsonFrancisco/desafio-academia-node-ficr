const GitHub = require("../services/GitHub");

exports.getCurriculo = async (req, res) => {
    try {
        const data = await GitHub(req.params.user);
        return res.send(data);
    } catch (err) {
        res.send(err);
    }
};
