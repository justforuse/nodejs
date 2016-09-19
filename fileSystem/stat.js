var fs = require("fs");

fs.stat("./fileSystem/input2.txt", function(err, stats){
	console.log(stats);
	console.log(stats.isFile());
	console.log(stats.isDirectory());
})