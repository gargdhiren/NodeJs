const bioData={
    name: "Dhiren",
    age : 21,
    college : "thapar university"
}

console.log(bioData);

// this is to convert object to json.
const jsonData= JSON.stringify(bioData);
console.log(jsonData);

//parse json to object

const objectData=JSON.parse(jsonData);
console.log(objectData);


// 1:convert to jsonData
// 2: add to other File
// 3: readFile
// 4: again convert back to js obj Notation 
// 5: console.log();