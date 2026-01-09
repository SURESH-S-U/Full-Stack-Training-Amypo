// Import the Build in File System MEthod. Already it is in node , it will be imported.
const fs = require("fs");

// Create a file - writeFile method.
fs.writeFile("data.txt", "Hello Node JS\n", (err) => {
    if(err){
        console.log("Error Creating file");
    }
    else{
        console.log("File created");
    }
});

// Reead the file - readFile method
fs.readFile("data.txt", "utf-8" , (err , data) => {
    if(err){
        console.log("Error in Reading file");
    }
    else{
        console.log("File contents : ");
        console.log(data);
    }
});

// Append File - appendFile method
fs.appendFile("data.txt", "New line Added to the file\n", (err) => {
    if(err){
        console.log("Error in Appending file");
    }
    else{
        console.log("File appended.");
    }
});

// Delete file - unlink method
fs.unlink("data.txt", (err) => {
    if(err){
        console.log("Error in deleting file")
    }
    else{
        console.log("File deleted.");
    }
});
