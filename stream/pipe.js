var fs = require("fs");
var read = fs.createReadStream("input.txt");

var write = fs.createWriteStream("input-copy.txt");

read.pipe(write);

console.log("success");