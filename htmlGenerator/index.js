var fs = require("fs");

fs.readFile(__dirname + "/test.txt", function(err, data){
	if(err){
		console.error(err);
	}else{
		fs.writeFile(__dirname + "/test.html", data, function(err){
			if(err){
				console.error(err);
			}
		})
	}
})