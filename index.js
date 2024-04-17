//13th Experiment
setTimeout(() => console.log("this is inner setTimeout 1"), 0);
setImmediate(() => console.log("this is inner setImmediate 1"));

//12th Experiment
// setImmediate(() => console.log("this is inner setImmediate 1"));
// setImmediate(() => {
//         console.log("this is inner setImmediate 2");
//         process.nextTick(() => console.log("this is process.nextTick 1"));
//         Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
//     });
// setImmediate(() => console.log("this is inner setImmediate 3"));

//11th Experiment
// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//     process.nextTick(() => 
//         console.log("this is the inner process.nextTick inside readFile")
//     );
//     Promise.resolve().then(() => 
//         console.log("this is the inner Promise.resolve inside readFile")
//     );
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);


// for (let i = 0; i < 20000000000; i++){

// }