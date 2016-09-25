var fs = require("fs");
fs.readdir(__dirname + "/temp", function(err, files) {
	files.forEach(function(file) {
		console.log(file);
	})
})
// 只能删除空目录
fs.rmdir(__dirname + "/temp/delete", function(err) {
	if (err) {
		console.error(err);
	}

	fs.readdir(__dirname + "/temp", function(err, files) {
		files.forEach(function(file) {
			console.log(file);
		})
	})
})
