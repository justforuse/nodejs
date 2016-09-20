var util = require("util");

console.log(util.isArray([]));
console.log(util.isArray("allen"));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));