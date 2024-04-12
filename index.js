//Example 6
const https = require("node:https");

const MAX_CALLS = 12;
const start = Date.now();

for(let i = 0; i < MAX_CALLS; i++ ) {
    https.request("https://google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log(`Reques: ${i + 1}`, Date.now() - start);
        });
    }).end();
}

//Example 5
// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 6; //number of threads
// const MAX_CALLS = 6;
// const start = Date.now();

// for(let i = 0; i < MAX_CALLS; i++ ) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start);
//     });
// }

//Example 4
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);


//const fs = require("node:fs");
// console.log("First");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("File contents");
// });

// console.log("Last");
