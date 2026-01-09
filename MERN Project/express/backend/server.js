// Import Express in this file
const express = require("express");

// Import the file System for store and manipulate the data inside the file.
const fs = require("fs");

// Import cors - To contact with express and react
const cors = require("cors");

const app = express();
const PORT = 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Read the data from JSON file
const readData = () => {
    const data = fs.readFileSync("data.json");
    return JSON.parse(data); // Parse will convert JSON to Arrays and Objects.
    // Because We want only req and res as Json. For others we need arrays for easy manipulation.
};


// Write the data to JSON file
const writeData = () => {
    fs.writeFileSync("data.json", JSON.stringify(data));
};


// GET Method - To read all the posts in data.json.
app.get("/posts", (req , res) => {
    const data = readData();
    res.json(data.posts);
});


// POST Method - Add new Posts 
app.post("/post" , (req , res) => {
    // Read the old data
    const data = readData();

    // Create a New object to add.
    const newPost = {
        id: Date.now(), // To add a unique id. (Data now changes for every second).
        title: req.body.title, // If we use req.title, It will get the title at the Header. But we need title in the body.
        body: req.body.body
    };


    // Add new post into Post Array
    data.posts.push(newPost);

    // Save the Updated data to data.json
    writeData(data);

    // Send the newly Created post as response to fronted.
    res.json(newPost);

});


