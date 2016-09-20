var util = require("util");

function Person(){
	this.name = 'allen',
	this.toString = function(){
		console.log("its tostring function");
	}
}

var obj = new Person();

console.log(util.inspect(obj));
// showHidden, depth, color
console.log(util.inspect(obj, true, null, true));

