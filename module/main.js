
/*新建的模块即便是在当前目录下也要加入路径: ./
否则会认为是已安装模块*/
var h = require("./hello");

var a = new h();

a.setName("allen");
a.sayHello();