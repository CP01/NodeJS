var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
var i=0;
while(true)
{
	console.log(i++);
	if(i==7) {
		eventEmitter.emit('scream');
		break;
	}
}