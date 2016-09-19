var fs = require("fs");

console.log("准备写入文件");

fs.writeFile("write.txt", "写入的文件", function(err){
	if(err){
		return console.error(err);

	}
	console.log("数据写入成功");

	console.log("读入写入的数据");

	fs.readFile("write.txt", function(err, data){
		if(err){
			return console.error(err);
		}

		console.log("异步读取文件数据： "  + data.toString());
	})
});

