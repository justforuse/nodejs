var fs = require("fs");

fs.readFile("./fileSystem/input2.txt", function(err, data){
	if(err){
		return console.err(err);

	}
	console.log("异步读取: " + data.toString());
})

var data = fs.readFileSync("./fileSystem/input2.txt");
console.log("同步读取: " + data.toString());

console.log("程序执行完毕");