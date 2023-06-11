//node js has built in module named event

//class events is required
const EventEmitter=require('events');

//object of events
const event = new EventEmitter();

//now we need to listen the emmited event.

//in node js we can callback multiple functions for same event which was not possible in javascript.
// event.on('sayMyName',()=>{
//     console.log('My name is Dhiren');
// });

// event.on('sayMyName',()=>{
//     console.log('My name is Garg');
// });
// event.on('sayMyName',()=>{
//     console.log('My name is DeadLogic');
// });
// //created a new event
// event.emit('sayMyName');

//check page status
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage",200,'ok');



