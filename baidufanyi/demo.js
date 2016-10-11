var fs = require("fs");
var md5 = require("./md5");
var http = require("http");


var appid = '20161008000029812';
var key = '5rd092892f8m8cD7JP2s';
var salt = (new Date).getTime();
var from = "auto";
var to = "en"
var query = "确认";

var sign = md5(appid + query + salt + key);
var url = "http://api.fanyi.baidu.com/api/trans/vip/translate?q=" +query +  "&from=auto&to=en&appid=20161008000029812&salt=" + salt + "&sign=" + sign;
console.log(encodeURI(url));
http.get(encodeURI(url), function(res) {
	console.log(res.statusCode);
	res.on("data", function(chunk){
		console.log(chunk.toString());
	});

	res.on("end", function(){

	})
})