const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit('greeting', `${this.greeting} ${name}`)
  }
}

const CustomEmitter = new MyCustomEmitter();

CustomEmitter.on('greeting', (input)=> {
    console.log('Greeting Event: ', input)
});

CustomEmitter.greet('Jay Mannem')
