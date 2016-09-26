var express = require("express");
var app = express();

app.get("/", function(req, res){
	console.log("method: GET");
	res.send("Hello GET");
})

app.post("/", function(req, res){
	console.log("method: POST");
	res.send("Hello POST");
})

app.get("/user", function(req, res){
	console.log("user GET");
	res.send("user");
})

app.get("/ab*cd", function(req, res){
	console.log("/ab*cd GET");
	res.send("/ab*cd GET");
})

var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("访问地址%s:%s", host, port);
})

