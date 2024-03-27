//1st pattern
// const add = (a, b) => {
//     return a + b;
// };

//2nd parttern
// module.exports = (a, b) => {
//     return a + b;
// };

//3rd parttern
// const add = (a, b) => {
//     return a + b;
// };

// const subtract = (a, b) => {
//     return a - b;
// };

// const multiply = (a, b) => {
//     return a * b;
// };

// module.exports = {
//     add,
//     subtract,
//     multiply
// }

//4th parttern - recomended pattern
module.exports.add = (a, b) => {
    return a + b;
};

module.exports.subtract = (a, b) => {
    return a - b;
};

module.exports.multiply = (a, b) => {
    return a * b;
};

//5th parttern
exports.add = (a, b) => {
    return a + b;
};

exports.subtract = (a, b) => {
    return a - b;
};

exports.multiply = (a, b) => {
    return a * b;
};