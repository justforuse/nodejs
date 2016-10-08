process.on("message", function(m){
	console.log("Child got message: " + m.hello);
})

process.send({foo:"bar"});