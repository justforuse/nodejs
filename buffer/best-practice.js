var fs = require("fs");
var iconv = require("iconv-lite");
var rs = fs.createReadStream(__dirname + "/test.txt");
var chunks = [];
var size = 0;
rs.on("data", function(chunk){
	console.log(chunk);
	chunks.push(chunk);
	size+=chunk.length;
})

rs.on("end", function(){
	var buf = Buffer.concat(chunks, size);
	var str = iconv.decode(buf, "utf8");
	console.log(str);
})