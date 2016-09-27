var fs = require("fs");
var child_process = require("child_process");

for (var i = 0; i < 3; i++) {
	var workerProcess = child_process.fork(__dirname + '/support.js', [i]);


	workerProcess.on("close", function(code){
		console.log("子进程退出: " + code);
	})
};