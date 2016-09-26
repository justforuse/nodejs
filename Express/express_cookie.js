var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function(req, res){
	console.log("Cookies: ", req.cookies);

})
app.listen(7777);