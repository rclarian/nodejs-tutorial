const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    const superHero = {
        firstName: "Bruce",
        lastName: "Wayne",
    };

    res.writeHead(200, {"Content-Type": "text/html"});

    //3rd option
    fs.createReadStream(__dirname + "/index.html").pipe(res);

    //2nd option
    //fs.createReadStream("./index.html").pipe(res);

    //1st option
    // const html = fs.readFileSync("./index.html", "utf-8");
    // res.end(html);
});

server.listen(3000, () => {
    console.log("Server running on port 3000")
});

//http://localhost:3000/