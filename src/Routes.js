const { Router } = require("express");
const NotFound = require("./middlewares/NotFound");

const app = Router();

app.get("/", (req, res) => res.send("hello academia accenture"));
app.use(NotFound);
module.exports = app;
