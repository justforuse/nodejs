var path = require("path");
console.log(path.normalize("/a/b/c/d/..."));
console.log(path.resolve("a.js"));
console.log(path.extname("a.js"));