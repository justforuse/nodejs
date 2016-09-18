var buf = new Buffer(30);
var actualLength = buf.write("justforuse.github.io", "utf8")
console.log(actualLength)

console.log(buf.toString("utf8"));

var json = buf.toJSON(buf);

console.log(json);

console.log(buf.length);
var res = String.fromCharCode(buf[1], buf[3])
console.log(res);
// console.log(buf[1]);
