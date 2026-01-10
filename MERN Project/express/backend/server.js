// Import Express
const express = require("express");

// PORT Declaration
const PORT = 5000;

// Import File System to read and write into the file. (file as DB)
const fs = require("fs");

// Import cors for Communication with React
const cors = require("cors");


// Create a express Server
const app = express();

// Middle ware
app.use(cors());
app.use(express.json());


// Read data Function.
const readData = () =>{
    const data = fs.readFileSync("data.json");
    return JSON.parse(data); // It convert the JSON into Arrays and Objects for Easy manipulation.
}


// Write data  to the Fs.
const writeData = (data) => {
    fs.writeFileSync("data.json" , JSON.stringify(data,null,2));
};


// Geting request from React via the PORT 5000
app.get("/posts", (req , res) => {
    const data = readData();
    res.json(data.posts);
})


// Post method to recive post request
app.post("/posts", (req , res) => {
    // for getting Old posts
    const data = readData();

    // for Add new Post with that
    const newPost = {
        id: Date.now(),
        name: req.body.name,
        dept: req.body.dept,
        email: req.body.email,
        phone: req.body.phone
    };

    // Add new post with old datas.
    data.posts.push(newPost);
    writeData(data);
    res.json(newPost);
});



// Put Metho to UPdate the posts.
app.put("/posts/:id",(req,res) => {
    //Read the old data
    const data = readData();

    //Get the POST ID from URL and convert that to no
    const postId = Number(req.params.id);

    //Update the matching post
    data.posts = data.posts.map(p =>
        p.id === postId ? { ...p, ...req.body } : p
    );
    //Save the updated to JSON
    writeData(data);
    res.json({message: "Post Updated"});
});



// Delete Method to remove a post
app.delete("/posts/:id", (req, res) => {
    // Read existing data
    const data = readData();

    // Get ID from URL and convert to number
    const postId = Number(req.params.id);

    // Filter out the post to be deleted
    data.posts = data.posts.filter(p => p.id !== postId);

    // Save updated data to JSON
    writeData(data);

    // Send response
    res.json({ message: "Post Deleted Successfully" });
});





// Start the server
app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});