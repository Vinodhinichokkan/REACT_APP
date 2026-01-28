const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Node");
});

server.listen(3000);



//-----------------------------------------//

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000);









