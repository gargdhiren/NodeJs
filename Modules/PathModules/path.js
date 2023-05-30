const path=require('path');
//to find the directory name
console.log('This is the directory name for the file is '+path.dirname('C:\Users\DELL\Desktop\NodeJS\Modules\PathModules/path.js'));
//to find the extension of the file
console.log('The extension of our file is '+path.extname('C:\Users\DELL\Desktop\NodeJS\Modules\PathModules/path.js'));

//to find the name of our file
console.log('Our file name is '+path.basename('C:\Users\DELL\Desktop\NodeJS\Modules\PathModules/path.js'));

//rather than finding each of things individually we can use the .parse which returns an object with the path attributes.
console.log(path.parse('C:\Users\DELL\Desktop\NodeJS\Modules\PathModules/path.js'));