var fs = require("fs");

fs.readdir(__dirname + "/temp", function(err, data){
	if(err){
		console.log("读取目录出错");
	}
	data.forEach(function(file){
		console.log(file);
	})
})