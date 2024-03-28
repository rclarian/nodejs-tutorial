// const add = require("./math");
// console.log(add(2, 5));

const math = require("./math");

// console.log(math.add(2, 5));
// console.log(math.subtract(50, 22));
// console.log(math.multiply(10, 2));

const { add, subtract } = math;

console.log(add(2, 5));
console.log(subtract(50, 22));