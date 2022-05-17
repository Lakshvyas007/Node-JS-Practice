// const fs = require('fs');
// const rs = fs.createReadStream('demo3.txt');

// rs.on('open', ()=>{
//     console.log("File is open");
// });

const events = require('events');
const eventEmitter = new events.EventEmitter();

let myEventHandler = function () {
    console.log("Dogs are best");
};

eventEmitter.on('bark', myEventHandler);

eventEmitter.emit('bark');


