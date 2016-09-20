var util = require("util");

console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name:"allen"}));