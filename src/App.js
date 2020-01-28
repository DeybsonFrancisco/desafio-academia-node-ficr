const express = require("express");
const Route = require("./Routes");

class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(Route);
    }
}
module.exports = new App().express;
