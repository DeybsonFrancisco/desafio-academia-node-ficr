const middlewareNotFound = (req, res, next) => {
    res.status(404).json({ msg: "Not found" });
    next();
};
module.exports = middlewareNotFound;
