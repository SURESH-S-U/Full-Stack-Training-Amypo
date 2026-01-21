// Import the express framework to create server and API
const express = require('express');

// To contact with MongoDB
const mongoose = require("mongoose");

// To Encrypt the password(hash)
const bcrypt = require("bcryptjs");

// Import JWT to create web tokens.
const jwt = require("jsonwebtoken");

// Import cors to accept the frontend request.
const cors = require("cors");


// Create express Server
const app = express();

// Allow server to read the JSON request.
app.use(express.json());

// Allow request from client
app.use(cors());

// MongoDB Connection string
mongoose.connect("mongodb://127.0.0.1:27017/AuthDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Create a model to interact with the collection
const User = mongoose.model("User", {name:String, email:String, password:String} , "user");


// Register API - POST Method
app.post("/register", async(req,res) => {
    // Get name , email, password from request body
    const {name, email, password} = req.body;
    // Check whehter the email is already exists
    const existing = await User.findOne({email});
    if (existing){
        return res.status(400).json({message: "User already exists"});
    }

    
    // Convert the plain password into hashed password
    const hashedPassword = await bcrypt.hash(password , 5); //  The number parameter is used to modify the password. 5 means 10 pow 5 = 32 times it will modify the password.

    // Save the user in MongoDB
    await User.create({
        name,
        email,
        password: hashedPassword
    });
    res.json({message: "User added Successfully"});
})