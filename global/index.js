console.time("load");
console.timeEnd("load");
// 全局变量输出当前文件或引用模块的绝对路径
console.log(__filename);
// 输出当前脚本的所在目录
console.log(__dirname);

// 不会阻断后续函数的执行
setTimeout(function(){
	console.log("hello");
}, 3000);

setInterval(function(){
	console.log("infinite");
}, 1000)

