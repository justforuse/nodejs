var data = "";
var readerStream = require("fs").createReadStream("input.txt");

readerStream.setEncoding("utf8");

readerStream.on("data", function(chunk){
	console.log(chunk);
	data += chunk;
})

readerStream.addListener("end", function(){
	console.log(data);
})

readerStream.on("error", function(err){
	console.log(err.stack);
})

console.log("success");