var express = require("express");
var fs = require("fs");

var app = express();
var user = {
	"user4":{
		"name": "allen",
		"password": "123456",
		"profession": "engineer",
		"id": "4",
	}
}
// 获取所有用户列表
app.get("/listUsers", function(req, res){
	fs.readFile(__dirname + "/" + "users.json", function(err, data){
		console.log(data);
		res.end(data);
	})
})
// 添加用户数据
app.get("/addUser", function(req, res){
	fs.readFile(__dirname +"/users.json", function(err, data){
		data = JSON.parse(data);
		data.user4 = user.user4;
		res.end(JSON.stringify(data));
		fs.writeFile(__dirname + "/users.json", JSON.stringify(data, null, "	"), function(err){
			if(err){
				console.error(err);

			}
		})
	})
})
// 获取指定ID的用户数据
app.get("/:id", function(req, res){
	console.log(req);

	fs.readFile(__dirname+"/users.json", function(err, data){
		data = JSON.parse(data);
		var user = data["user" + req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	})
})
// 删除某个ID的用户
app.get("/deleteUser/:id", function(req, res){
	fs.readFile(__dirname+"/users.json", function(err, data){
		if(err){
			console.error(err);
		}else{
			data = JSON.parse(data);
			delete data["user" + req.params.id];
			console.log(data);
			res.end(JSON.stringify(data, null, "	"));
		}
	})
})
var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("address: " ,host, port)
})