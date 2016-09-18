var fs = require("fs");

fs.readFile("inputs.txt", function(err, data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
})
console.log("end");