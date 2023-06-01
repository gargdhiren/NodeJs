const http= require("http");
const fs=require("fs");

//we create a server with call back function
const server = http.createServer((req,res)=>{
    //here we fetch the data at start

     const data=fs.readFileSync(__dirname+"/userApi/userapi.json","utf-8");
    const objData=JSON.parse(data);
    //req to request the server for something
    //res is the response after the request
    //console.log(req.url);
    //we do not need to require the url for using url.
    if(req.url == '/'){
        res.end("hello from home");
    } else if(req.url == '/userapi'){
        // fs.readFile(__dirname+"/userApi/userapi.json","utf-8",
        //     (err,data)=>{
                //here we call the json file and out put the data now we call this function each time and thus call this in start of the function.
                var x=objData[0].name;
                res.end(x);
            // }
        // )
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