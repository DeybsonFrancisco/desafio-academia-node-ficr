const { readFileSync, writeFileSync } = require("fs");

class FileHelper {
    constructor() {}

    get({ path }) {
        const result = readFileSync(path).toString();
        return JSON.parse(result);
    }
}

module.exports = new FileHelper();
