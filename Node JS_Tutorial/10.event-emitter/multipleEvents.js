const EventEmitter = require("events");

const multipleEvents = new EventEmitter();

multipleEvents.on("start", () => {
  console.log("Process Started");
});

multipleEvents.on("end", () => {
  console.log("Process Ended");
});

multipleEvents.emit("start");
setTimeout(() => {
  multipleEvents.emit("end");
}, 2000);
