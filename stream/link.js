var fs = require("fs");

fs.createReadStream("input.txt").pipe(fs.createWriteStream("input-link.txt"))
console.log("success");