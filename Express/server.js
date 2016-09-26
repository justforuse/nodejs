var express = require("express");
var app = express();
var fs = require("fs");
var util = require("util");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

app.get("/index.html", function(req, res) {
	res.sendFile(__dirname + "/index.html")
})

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
})

app.get("/process_get", function(req, res) {
	var response = JSON.stringify({
		first_name: req.query.firstName,
		last_name: req.query.lastName
	});
	console.log(response);
	res.end(response);
})

app.post("/file_upload", function(req, res) {
	console.log(req);
	fs.writeFile(__dirname + "/log.txt", util.inspect(req), function(err, data) {

	})
	console.log(req.files[0]);
	var des_file = __dirname + "/" + req.files[0].originalname;

	fs.readFile(req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err){
			var response;
			if(err){
				console.error(err);
			}else{
				response = {
					message:"File upload success",
					filename : req.files[0].originalname
				}
			}
			console.log(response);
			res.end(JSON.stringify(response));
		})
		
	})
})

var server = app.listen(9999, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("访问地址%s:%s", host, port);
})
