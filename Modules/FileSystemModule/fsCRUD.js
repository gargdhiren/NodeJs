const fs=require('fs');
//create a folder and create a file.
// fs.mkdirSync('Dhiren');


//making a bio.txt file anding data into it.
// fs.writeFileSync(__dirname+'/Dhiren/bio.txt','This is a bio file and data is written for the first time.');



// if we want to append data into the file.
// fs.appendFileSync(__dirname+'/Dhiren/bio.txt','This is the append on the file');

//to read a file and not get a buffer 
// const fileContent=fs.readFileSync(__dirname+'/Dhiren/bio.txt','utf8');
// console.log(fileContent);
// this is to change the file name using file module.
// fs.renameSync(__dirname+'/Dhiren/bio.txt',__dirname+'/Dhiren/myBio.txt')
//deleting a file 
//to delete the file in the folder.
// fs.unlinkSync(__dirname+'/Dhiren/myBio.txt');
// to delete a folder.
// fs.rmdirSync(__dirname+'/Dhiren');