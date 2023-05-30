const add = (a,b)=>{
    return a+b;
}
//we cannot use the add in any other other file without exporting it.
//as it private for this file.

//any file can access add 
//we have changed the status from private to public

const name='Dhiren';
// we exporting name now.
module.exports = name;