var fs = require("fs");

var buf = new Buffer(1024);
console.log(__dirname);
// __dirname获取js文件路径
fs.open(__dirname + "/input2.txt", "r+", function(err, fd){
	if(err){
		return console.error(err);
	}

	console.log("文件打开成功");
	console.log("截取10字节的内容");

	fs.ftruncate(fd, 10, function(err){
		if(err){
			console.log(err);
		}

		console.log("文件截取成功");

		fs.read(fd, buf, 0, buf.length, 0 , function(err, bytes){
			if(err){
				console.log(err);
			}

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

	
})