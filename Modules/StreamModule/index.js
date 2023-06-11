const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    //this is not streaming 
    //if we have a very long text or large file it will keep on loading as it not runnig simultaneously.
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) console.log(err);
    //     else res.end(data.toString());
    // });

    // const rstream= fs.createReadStream('input.txt');
    // //data event and only this is not enough.
    // rstream.on('data',(chunkData)=>{
    //     res.write(chunkData);
    // })
    // //this to end the rstream event
    // //it is fired when there is no more data to it.
    // rstream.on('end',()=>{
    //     res.end();
    // })

    // //for any errors
    // rstream.on('error',(err)=>{
    //     console.log(err);
    // })

    //using pipe method
    //pipe ek file se read karna aur given file mein write karvana
    //speed was an issue the with which the data was read the data was not written and this is not case of rstream.
    const rstream= fs.createReadStream('input.txt');
    rstream.pipe(res);
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started on port number 8000 on localhost!!!')
})