const upper = require("upper-case").upperCase;

function greet(name) {
    console.log(upper(`Hello ${name}, welcome to Codevolution`));
}

greet("Vishwas");

module.exports = greet;

//npm install upper-case //install package
//npm uninstall upper-case //uninstall package