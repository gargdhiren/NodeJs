const http= require("http");

//we create a server with call back function
const server = http.createServer((req,res)=>{
    //req to request the server for something
    //res is the response after the request
    res.end("hello from the other side");
});
//to send a request
//127.0.0.1 is localhost
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port on 8000")
});