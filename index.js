//4th Experiment
setTimeout(() => console.log("this is setTimeout 1"), 1000);
setTimeout(() => console.log("this is setTimeout 2"), 500);
setTimeout(() => console.log("this is setTimeout 3"), 0);

//3rd Experiment
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//     console.log("this is setTimeout 2")
//     process.nextTick(() => 
//         console.log("this is the inner next tick inside setTimeout")
//     );
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

//2.5nd Experiment
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//     console.log("this is process.nextTick 2");
//     process.nextTick(() => 
//         console.log("this is the inner next tick inside next tick")
//     );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//     console.log("this is Promise.resolve 2")
//     process.nextTick(() => 
//         console.log("this is the inner next tick inside Promise then block")
//     );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//2nd Experiment
// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
//process.nextTick(() => console.log("this is process.nextTick 1"));

//1st experiment
// console.log("console.log 1");
// process.nextTick(() => console.log("this is process.next 1"));
// console.log("console.log 2");