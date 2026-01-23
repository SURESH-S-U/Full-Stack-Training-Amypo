const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const API = 5000;

const app = express();

app.use(express.json());
app.use(cors());

// JWT secret key.
const SECRET = "jwtsecret"; // JWT Secret key used to sign in and verify token.

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/roleAuthDB")
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



// JWT Token Creator
const makeToken = (user) => {
    return jwt.sign(

        {id: user._id, role: user.role},
        SECRET,
        {expiresIn: "1hr"}
    );
}



// Post Request for - Register
app.post("/register", async(req,res) => {
    try{

        const {name, email, password, role}= req.body;

        //Check Validation
        if(!name || !email || !password)
        {
            return res.status(400).json({message: "All fields are required"});
        }

        //Email Duplicates Check
        const exists = await User.findOne({email});
        if(exists) return res.status(400).json({message:"Email already registered"});

        // Encrypt the password - Hash Password
        const hash = await bcrypt.hash(password, 10);

        // Create user DB
        await User.create({name, email, password: hash, role: role || "user"});

        res.json({message: "User Registered Successfully."});

    }

    catch(err) {
        res.status(500).json({message: err.message});
    }

});




// POST Request for - Login
app.post("/login" , async(req , res) => {
    
    try{
        const {email , password} = req.body;

        // Find Email
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        // Check the Password
        const ok = await bcrypt.compare(password, user.password);
        if(!ok){
            return res.status(400).json({message: "Invalid password"});
        }

        res.json({
            message: "login Successful",
            token: makeToken(user),
            role: user.role
        });
    }

    catch(err){
        res.status(500).json({message: err.message});
    }

});




app.listen(API , () => console.log(`Server running on http://localhost: ${API}`));