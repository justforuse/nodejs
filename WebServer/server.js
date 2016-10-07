var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req, res){
	console.log(req.url);
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url, true).query;

	// fs.readFile(__dirname +　pathname, function(err, data){
	// 	if(err){
	// 		console.error("读取文件出错");
	// 		res.writeHead(404, {"Content-type":"text/html"});
	// 	}else{
	// 		res.writeHead(200, {"Content-type":"text/html"});
	// 		res.write(data.toString());
	// 	}

	// 	res.end();

	// })
	res.writeHead(200, {"Content-type":"text/html"});
	res.end(JSON.stringify(query));
}).listen(8081);

console.log("server running at port:8081");