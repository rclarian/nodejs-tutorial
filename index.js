//import fetch from "node-fetch";
const upper = require("upper-case").upperCase;

function greet(name) {
    console.log(upper(`Hello ${name}, welcome to Codevolution`));
}

greet("Vishwas");

module.exports = greet;

//npm install upper-case //install package
//npm uninstall upper-case //uninstall package
//npm install - //install all dependencies
//npm install -g nodemon
//nodemon index.js
//npm run start - watch the video