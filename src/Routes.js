const { Router } = require("express");
const NotFound = require("./middlewares/NotFound");
const CurriculoController = require("./controllers/CurriculoController");

const app = Router();

app.get("/:user", CurriculoController.getCurriculo);
app.use(NotFound);
module.exports = app;
