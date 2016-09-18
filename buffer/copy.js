var buf1 = new Buffer("allen");

var buf2 = new Buffer(5);

buf1.copy(buf2);

console.log(buf2.toString());

var buf3 = buf2.slice(0, 3);
console.log(buf3.toString());