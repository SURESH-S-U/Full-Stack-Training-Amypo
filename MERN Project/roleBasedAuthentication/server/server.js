const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const API = 5000;

const app = express();

app.use(express.json());
app.use(cors);

// JWT secret key.
const SECRET = "jwtsecret"; // JWT Secret key used to sign in and verify token.

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/rollAuthDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error : "+err));

// MonoDB Model
// Model Should have 3 parameters. ModelName(local) , Schema , Actual Collection name in DB.
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        email: {type:String, unique: true},
        password: String,
        role: {type: String, default: "user"}
    })
);



// Post Request for - Register
app.post("/request", async(req,res) => {
    
})