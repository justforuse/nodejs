var express = require('express');
var router = express.Router();

var userList = [
	{
		name:"allen",
		address:{
			province:"heilongjiang",
			city:"mudanjiang"
		}
	},
	{
		name:"bob",
		address:{
			province:"neimenggu",
			city:"tongliao"
		}
	}
]
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get("/hello", function(req, res, next) {
	res.send("现在时间是: " + new Date());
});

router.all("/user/:username", function(req,res,next){
	console.log("username: " + req.params.username);
	//res.send(req.params.username);
	next();
});

router.get("/user/:username", function(req, res, next){
	res.render('user', { username : req.params.username})
});

router.get("/userList", function(req, res, next){
	res.render('userList', {userList : userList});
})


module.exports = router;
