var buf1 = new Buffer(20);
var buf2 = new Buffer(20);


buf1.write("justforuse.github.io");
buf2.write("allen");

var res = Buffer.concat([buf1, buf2]);
console.log(res.toString());