var net = require("net");

var server= net.createServer(function(socket){
	socket.on("data", function(){
		socket.write("hello");
	})

	socket.on("end", function(){
		console.log("connect close");
	})

	socket.write("this is a tcp connection");
})

server.listen(8124, function(){
	console.log("server is on");
})