var fs = require("fs");

// 只能创建一级目录
fs.mkdir(__dirname + "/temp", function(err, data){
	if(err){
		console.error(err);
	}

	console.log("创建目录成功");
})