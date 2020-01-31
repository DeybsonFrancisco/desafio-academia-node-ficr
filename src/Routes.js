const { Router } = require("express");
const NotFound = require("./middlewares/NotFound");
const CurriculoController = require("./controllers/CurriculoController");
const ErrorHandler = require("./helpers/ErrorHelper");
const FileHelper = require("./helpers/FileHelper");
const path = require("path");

const app = Router();

app.get("/curriculo", CurriculoController.getCurriculo);

app.use(NotFound);
app.use((err, req, res, next) => {
    if (!err.statusCode) err.statusCode = 500;
    ErrorHandler.errorHandle(err, res);
});
module.exports = app;
