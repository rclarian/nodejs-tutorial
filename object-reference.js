//module.export
const obj1 = { 
    name: "Bruce Wayne",
}

//export
let obj2 = obj1; 
obj2 = {
    name: "Clark Kent",
};

console.log(obj1);
console.log(obj2);