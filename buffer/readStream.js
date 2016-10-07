var fs = require("fs");

var rs = fs.createReadStream(__dirname + "/test.txt", { highWaterMark: 11 });
// 设置编码，传递编码后字符串，而非buffer
rs.setEncoding("utf8");
var data = "";
rs.on("data", function(chunk) {
	data += chunk;
});

rs.on("end", function() {
	console.log(data);
})
