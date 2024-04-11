const fs = require("node:fs/promises");

console.log("First");

async function readFile() {
    try{
        const data = await fs.readFile("file.txt", "utf-8");
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

console.log("Second");

readFile();

// console.log("First");

// fs.readFile("file.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// console.log("Second");

// const fs = require("node:fs");

// console.log("First");

// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });
// console.log("3rd");

// fs.writeFileSync("./greet.txt", "Hello world ryan!");
// fs.writeFile("./greet.txt", " Hello world ryan1!", { flag: "a" }, (error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("File written");
//     }
// });