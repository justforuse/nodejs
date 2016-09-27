const fs = require('fs');
const child_process = require('child_process');


for (var i = 0; i < 3; i++) {
	// 需要指定文件的绝对路径 / \\ 均可
	var str = "node " + __dirname + "/support.js " + i;
	console.log(str);
	var workerProcess = child_process.exec(str, function(error, stdout, stderr) {
		if (error) {
			console.log(error.stack);
			console.log('Error code: ' + error.code);
			console.log('Signal received: ' + error.signal);
		}
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
	});

	workerProcess.on('exit', function(code) {
		console.log('子进程已退出，退出码 ' + code);
	});
}
