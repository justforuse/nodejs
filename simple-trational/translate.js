var traditionlize = require("./traditionlize");
var fs = require("fs");

var data = JSON.parse(fs.readFileSync(__dirname + "/simple.json").toString());

for (var i in data) {
	data[i] = traditionlize(data[i]);
}
console.log(data);

fs.writeFile(__dirname + "/simple_trational.json", JSON.stringify(data), function(err, data){
	if(err){
		console.error(err);
	}else{
		console.log("转为繁体文件成功");
	}
})
