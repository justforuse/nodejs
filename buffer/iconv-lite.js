var iconv = require("iconv-lite");

var str = "巴山楚水凄凉地，responsibility。";
// 字符串转buffer
var buf = iconv.encode(str, "gbk");
// buffer转字符串
var res = iconv.decode(buf, "gbk");
console.log(res);