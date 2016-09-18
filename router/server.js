var http = require("http");
var url = require("url");

function start(){

	function onReq(req, res){
		var pathName = url.parse(req.url).pathname ;

		console.log("request for: " + pathName);

		res.writeHead(200, {"Content-Type":"text/plain"});

		res.write("It works");

		res.end();
	}

	http.createServer(onReq).listen(9999);
	console.log("server has started");
}

exports.start = start;