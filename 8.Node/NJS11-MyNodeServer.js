// >npm install -g nodemon
// nodemon NJS11-MyNodeServer.js
// for output  
// http://localhost:9001/
// if stop server Ctr + C 
const http = require("http");

const server = http.createServer((req,res)=>{

    res.end("Hello form Server side : RAM");
})

server.listen(9001,"127.0.0.1", ()=> {
    console.log("Listening on port 9001: RAM")
})