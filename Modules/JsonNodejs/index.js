const fs= require("fs");
const bioData={
    name: "Dhiren",
    age : 21,
    college : "thapar university"
}

// console.log(bioData);

// // this is to convert object to json.
// const jsonData= JSON.stringify(bioData);
// console.log(jsonData);

// //parse json to object

// const objectData=JSON.parse(jsonData);
// console.log(objectData);


// 1:convert to jsonData
// 2: add to other File
// 3: readFile
// 4: again convert back to js obj Notation 
// 5: console.log();

//step 1:
const jsonData=JSON.stringify(bioData);

//step 2:
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log(err);
});

fs.readFile('json1.json','utf-8',(err,data)=>{
    //console.log(data);
    const orgData=JSON.parse(data);
    console.log(orgData);
});
