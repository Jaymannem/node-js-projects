const EventEmitter = require("events");

const firstEmitter = new EventEmitter();

firstEmitter.on('greet', (name)=> {
    console.log(`Hello ${name}`)
});

firstEmitter.emit('greet', 'Jaya Mannem');

