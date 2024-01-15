// fs Module 

const { log } = require("console");
const fs = require("fs");
const { buffer } = require("node:stream/consumers");
// console.log(fs);

// Read File Asynchronous in fs

fs.readFile("input.txt",(e,data)=>{
    if(e){
        console.log("Error is found : -",e);
    }
    // console.log(data); // that is return Buffer data
    // console.log(data.toString());
})


// Read File synchronous in fs

const fileData = fs.readFileSync("input.txt");

// console.log(fileData); // that also return Buffer

// console.log(fileData.toString());

// Read file Another way 

const buf = new Buffer(1024);

// OPEN FILE

fs.open("input.txt","r+",(err,fd)=>{

    if(err){
        console.log("Error in File open",err);
    }
    console.log("File open successFully!!");
    // READ File
    fs.read(fd ,buf,0, buf.length, 0, (e,bytes)=>{
        if(e){
            console.log("Error in File read");
        }
        console.log("file read Success Fully!!");
        const data = buf.slice(0,bytes);
        console.log(data.toString());

    })

    // Close FILE
    fs.close(fd,(er)=>{
        if(er){
            console.log("Error in Close the file",er);
        }
    console.log("File close SuccessFully!!");

    })
})

// Write File in fs Module

// Write file Asynchronous

fs.writeFile("inputFile.txt","I am Learn FS Module in Node.js",(err)=>{
    if(err){
        console.log("Error in Write the file");
    }
   console.log("File write Success Fully!!");
   // Now read new written file
   fs.readFile("inputFile.txt",(er,data)=>{
    if(er){
        console.log("Error in Read the file" ,er);

    }
    console.log("Newly created file read success fully!!");
    console.log(data.toString());
   })
})

//












