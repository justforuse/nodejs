var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();

//获取请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res){
	console.log("get html");
	res.sendFile(__dirname + "/form.html");
})

app.post("/", function(req, res){
	var response = {};
	response.title = req.body.title;
	response.text = req.body.text;
	res.send(response);
})
var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("访问地址%s:%s", host, port);
})