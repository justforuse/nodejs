var youdao = require("youdao");

youdao.set({
	keyfrom:"just-a--app",
	key:"308840255"
})

youdao.translate("string", function(err, res){
	console.log(res[0]);
})