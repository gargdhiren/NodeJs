const http= require("http");

//we create a server with call back function
const server = http.createServer((req,res)=>{
    //req to request the server for something
    //res is the response after the request
    //console.log(req.url);
    //we do not need to require the url for using url.
    if(req.url == '/'){
        res.end("hello from home");
    } else if(req.url == '/contact'){
        res.end("hello from the contact side");
    }
    else{
        //this for tell the server that this url is not present and it is an error.
        res.writeHead(404);
        res.end("404 page not found");
    }
});
//to send a request
//127.0.0.1 is localhost
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port on 8000")
});