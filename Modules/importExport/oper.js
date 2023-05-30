const add = (a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
//we cannot use the add in any other other file without exporting it.
//as it private for this file.

//any file can access add 
//we have changed the status from private to public

const name='Dhiren';
// we exporting name now.

//now we cannot pass directly we need to pass module.exports as an object so

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name=name;

//writing the code in above way is hectic so we can use the below given syntax
module.exports ={add,sub,name};