process.on("exit", function(code){
	setTimeout(function(){
		console.log("will not execute");
	}, 0)
	console.log("exit code: " + code);
})
// exit code: 1
//console.log(a.name);
console.log(process.version);
console.log(process.platform);
console.log(process.memoryUsage());
console.log("finish");