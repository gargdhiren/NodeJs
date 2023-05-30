const fs=require('fs');


// //make a folder named Dhiren.

// fs.mkdir(__dirname+'/Dhiren',(err)=>{
//     console.log('directory made');
// });

// //writing in the file
// fs.writeFile(__dirname+'/Dhiren/bio.txt','This is an async file.',(err)=>{
//     console.log('file made');
// });

// //appending in that file
// fs.appendFile(__dirname+'/Dhiren/bio.txt','appending in my file',(err)=>{
//     console.log('file appended');
// });

// //reading the data without buffer
// fs.readFile(__dirname+'/Dhiren/bio.txt','utf-8',(err,data)=>{
//     console.log('Data is ->'+ data);
// });

//renaming the file
// fs.rename('./Dhiren/bio.txt', './Dhiren/myBio.txt', function(err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });

//removing the files
// fs.unlink('./Dhiren/myBio.txt',(err)=>{
//     console.log(err);
// })
//remove directory
fs.rmdir('./Dhiren',(err)=>{
    console.log('Directory removed');
})

