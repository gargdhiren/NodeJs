const os=require('os');


//for checking the architecture
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
//this gives free memory in bytes.
//this is cpu memory
const freeMemory=os.freemem();
console.log(freeMemory);
console.log(`${freeMemory/1024/1024/1024}`)

const totalMemory=os.totalmem();
console.log(totalMemory);
console.log(`${totalMemory/1024/1024/1024}`)
