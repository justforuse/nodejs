var fs = require("fs");
var res;
fs.readFile(__dirname + "/result.txt", function(err, data) {
	// console.log(data);
	res = data.toString().split("\n");
	console.log(res);
	fs.readFile(__dirname + "/zh-CN.json", function(err, data) {
		var text = JSON.parse(data.toString());
		var resObj = {};
		var i = 0;
		for (var item in text) {
			resObj[item] = res[i];
			i++;

		}
		console.log(JSON.stringify(resObj));
		fs.writeFile(__dirname + "/result.json", JSON.stringify(resObj), function(err) {
			if (!err) {
				console.log("生成成功");
			}
		})
	})
})
