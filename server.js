const express = require("express");
var path = require("path");
const app = express();

app.use('/static', express.static('static'));

app.get('/', function(req, res){
    res.sendFile('index.html', {root: path.join(__dirname, './')});
});

app.listen(5000, function(){
    console.log("Listening on http://localhost:5000");
});



/*

const http = require("http");

const server = http.createServer(function(req, res){
    console.log(`User Visisted ${req.url}`);
    res.end("hello!");
});

console.log("Listening on http://localhost:5000");
server.listen(5000);

*/
