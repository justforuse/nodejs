var fs = require("fs");

var buf = new Buffer(1024);
console.log(__dirname);
// __dirname获取js文件路径
fs.open(__dirname + "/input2.txt", "r+", function(err, fd){
	if(err){
		return console.error(err);
	}

	console.log("文件打开成功");
	console.log("准备读取文件");

	// 通过 fs.open() 方法返回的文件描述符, 写入的缓冲区，写入的偏移量， 要从文件中读取的字节数
	// 文件读取的起始位置，回调函数
	// bytes 读取的字节数
	fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
		if(err){
			console.log(err);
		}

		console.log(bytes + "字节被读取");

		if(bytes > 0){
			console.log(buf.slice(0, bytes).toString());
		}

		fs.close(fd, function(err){
			if(err){
				console.log(err);
			}

			console.log("文件关闭成功");
		})
	})
})