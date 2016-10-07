var fs = require("fs");

var data = fs.readFileSync(__dirname + "/test.txt");
console.log(data);
var contentArr = data.toString().split("\n");
console.log(contentArr);
transfer(contentArr);
function transfer(arr) {
	for (var i = 0; i < arr.length; i++) {

		arr[i] = check(arr[i]);
	}
	append(arr.join(""));
}
function append(str){
	// 追加内容到文件，不存在则创建
	fs.appendFile(__dirname + "/result.html", str, function(err) {
		if (err) {
			console.log("写入失败");
		}
	})
}

function check(str){
	var h1 = /^#[^#]*$/;
	var h2 = /^##[^#]*$/;
	if(h1.test(str)){
		debugger;
		return "<h1>" + str.substr(1) + "</h1>";
	}else if(h2.test(str)){
		return "<h2>" + str.substr(2) + "</h2>";
	}else{
		return str;
	}
}
