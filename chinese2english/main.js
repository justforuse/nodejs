var fs = require("fs");
var http = require("http");
var qs = require("querystring");
var iconv = require("iconv-lite");

var options = {
	hostname: "http://fanyi.youdao.com/openapi.do"
}
var chunks = [];
var size = 0;
var result = {};
fs.readFile(__dirname + "/test.json", "utf-8", function(err, data) {
	console.log(data);
	var text = JSON.parse(data);


	for (var item in text) {
		console.log(text[item]);
		var url = "http://fanyi.youdao.com/openapi.do?keyfrom=just-a--app&key=308840255&type=data&doctype=json&version=1.1&q=" + text[item];
		console.log(url);
		(function() {
			http.get(encodeURI(url), function(res) {
				console.log(res.statusCode);
				res.on("data", function(chunk) {
					chunks.push(chunk);
					size += chunk.length;
					// console.log("BODY: " + chunk);
					// console.log(JSON.parse(chunk));
					result[item] = JSON.parse(chunk).translation[0];
					// console.log(text);

				});

				res.on("end", function() {
					var buf = Buffer.concat(chunks, size);
					var str = iconv.decode(buf, "utf8");
					console.log("end: " + str);
					fs.appendFile(__dirname + "/result.json", JSON.parse(str).translation[0].toString(), function(err) {
						if (err) {
							console.log("写入失败");
						}
						console.log("写入成功" + JSON.stringify(result));
					})
				})
			})

		}());
	}
})
