//const add=require('./oper')
// we required the module add 

// in the above oper.js name was exported but we choose to name it as add so it will print the name

// now rather than import a single function we are importing a whole object from oper

const {add,sub,name}=require('./oper');
console.log(add(5,5));
console.log(sub(10,5));
console.log(name);