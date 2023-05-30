//if we want to use a build in module we need to use require
const fs=require("fs");
//this is synchoronus function 
//if file exists it will edit it or it will create a new file
//creating a new file it will overwrite if the data is already present
// fs.writeFileSync('read.txt','welcome to my channel');
// if we write the same thing again it will overwrite the file
fs.writeFileSync('read.txt','I am dhiren and i want to die.')

//if we want to append to the file
// fs.appendFileSync('read.txt','just kidding i do not want to die. I am already dead inside.')


//if we want to read something from the  file
//when we read a file we get buffer data from the file
//it is of buffer data type and is not present in javascript but in nodeJs.
//this is binary data
//it can be used in networking
//<Buffer 49 20 61 6d 20 64 68 69 72 65 6e 20 61 6e 
// 64 20 69 20 77 61 6e 74 20 74 6f 20 64 69 65 2e>
const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);
//we can manipulate the buffer data eg->
org_data=buf_data.toString();
console.log(org_data);

//to rename a file
//rename the file from read.txt to readWrite.txt
fs.renameSync(/*old path*/'read.txt',/*new name*/'readWrite.txt');