var data = "output: justforuse.github.io";

var writeStream = require("fs").createWriteStream("outputt.txt");

writeStream.write(data, "utf8");

writeStream.end();

writeStream.on("finish", function(){
	console.log("finish");
})

writeStream.on("error", function(err){
	console.log(err.stack);
})
