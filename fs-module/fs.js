// fs Module 

const fs = require("fs")
// console.log(fs);

// Read File Asynchronous in fs

fs.readFile("input.txt",(e,data)=>{
    if(e){
        console.log("Error is found : -",e);
    }
    console.log(data); // that is return Buffer data
    console.log(data.toString());
})


// Read File synchronous in fs





