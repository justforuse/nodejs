var events = require("events");

var eventEmiter = new events.EventEmitter();
var connentHandler = function(){
	console.log("connect success");

	eventEmiter.emit("data_received");
}
eventEmiter.on("connection", connentHandler);

eventEmiter.on("data_received", function(){
	console.log("data received!");
})

eventEmiter.emit("connection");

console.log("end");