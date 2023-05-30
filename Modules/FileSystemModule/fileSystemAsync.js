const fs=require('fs');

//always use callbacks with async functions.


//in this file we doing asynchronous file system.
//this is asynchronous function.
//there is callback which makes our function asynchronous.

//fs.writeFile('read.text','today is awesome because of async');
//^
//this will throw an error as an callback is not called.
// fs.writeFile('read.txt','today is awesome day',(err)=>{
//     console.log('file is created');
// });

//call back is call me back.
//call back tells us the task is complete it is not required in synchronous function
//synchronous functions occur if previous function is completed.

//appended the file.
// fs.appendFile('read.txt','file is appended',(err)=>{
//     console.log('file appended');
// });

// now to read the file directly and not get buffer data ,we use utf8
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
})