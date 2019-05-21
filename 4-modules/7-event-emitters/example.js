const EventEmitter = require('events');
//Streams are Event Emitters
//process.stdin, process.stdout

const myEmitter = new EventEmitter();
//Wrapping the emit call with a setImmediate so the callback is placed on the event
//loop and invoked after the rest of the cycle
setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
