var child=require("child_process").fork(__dirname + "/child.js");
var child2=require("child_process").fork(__dirname + "/child.js");

var server = require("net").createServer();
server.on("connection", function(socket){
	socket.end("handled by parent\n");
})

server.listen(1337, function(){
	child.send("server", server);
	child2.send("server", server);
})

