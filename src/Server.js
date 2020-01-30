require("dotenv").config();
const Server = require("./App");

Server.listen(process.env.PORT || 4565);
