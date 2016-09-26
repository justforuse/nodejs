var fs = require("fs");
var child_process = require("child_process");

for(var i =0;i<3;i++){
	var workerProcess = child_process.exec(__dirname + "/node support.js "+i, function(err, stdout, stderr){
		if(err){
			console.log(err.stack);
			console.log("Error code: ", err.code);
			console.log("signal received: ", err.signal);
		}else{
			console.log("stdout ", stdout);
			console.log("stderr ", stderr);
		}

	});

	workerProcess.on("exit", function(code){
		console.log("子进程已退出，退出码: ", code);
	})



}