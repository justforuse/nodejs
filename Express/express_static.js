var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.send("Hello, allen");
})

var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("访问地址%s:%s", host, port);

})
