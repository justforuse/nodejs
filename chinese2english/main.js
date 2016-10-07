var fs = require("fs");
var http = require("http");
var qs = require("querystring");

var options = {
	hostname: "http://fanyi.youdao.com/openapi.do"
}

fs.readFile(__dirname + "/test.json", "utf-8", function(err, data) {
	console.log(data);
	var text = JSON.parse(data);
	(function() {
		for (var item in text) {
			console.log(text[item]);
			http.get("http://fanyi.youdao.com/openapi.do?keyfrom=just-a--app&key=308840255&type=data&doctype=json&version=1.1&q=" + text[item], function(res) {
				console.log(res.statusCode);
				res.on("data", function(chunk) {
					
					console.log("BODY: " + chunk);
					console.log(JSON.parse(chunk));
					text[JSON.parse(chunk).query] = JSON.parse(chunk).translation[0];
					console.log(text);
					fs.writeFile(__dirname + "/result.json", JSON.stringify(text, null, "	"), function(err) {
						if (err) {
							console.log("写入失败");
						}
						console.log("写入成功" + JSON.stringify(text));
					})
				});
			})
		}
	}());




})
