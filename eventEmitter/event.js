var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("myEvent", function(n) {
    console.log("event happened: " + n + "\n");
})

eventEmitter.once("myEvent", function(n) {
    console.log("event happened2: " + n + "\n");
})
var i = 0;


setInterval(function() {
	var l = events.EventEmitter.listenerCount(eventEmitter, "myEvent");
	console.log(l);
    eventEmitter.emit("myEvent", i++);
    eventEmitter.emit("zz")
}, 1000);
