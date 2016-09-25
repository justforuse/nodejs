var fs = require("fs");

console.log("准备删除文件");

fs.unlink(__dirname + "/to-delete.txt", function(err, data){
	if(err){
		console.log("删除文件出错");
	}

	console.log("删除文件成功");
})