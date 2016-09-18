var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain"});

	res.end("Hello world\n");
}).listen(8888);

console.log("running at 8888")