// exports.sayHello = function(str){
// 	console.log("Hello, " + str);
// }

function Hello(){
	var name = "default name";

	this.setName = function(str){
		name = str;
	}

	this.sayHello = function(){
		console.log("Yalo, " + name);
	}
}

module.exports = Hello;