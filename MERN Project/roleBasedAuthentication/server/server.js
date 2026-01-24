//Import necessary libraries
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");


//Create server using express
const app = express();
app.use(express.json());
app.use(cors());

//JWT Secret Key
const SECRET = "jwtsecret"; //JWT Secret key used to sign in and verify token

//MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/roleDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

//MongoDB Model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        email: {type: String, unique: true}, // Prevents Duplicate Email ID
        password: String,
        role: {type: String, default: "user"}
    })
 );

 //JWT Token Creator
 const makeToken = (user) => {
    return jwt.sign(
        {id: user._id, role: user.role},
        SECRET,
        {expiresIn: "1h"}
    );
 }
 const verifyToken = async(req,res,next)=>{
    const header = req.headers.authorization;
    if(!header || !header.startsWith("Bearer ")){
        return res.status(401).json({message:"No Token Found"})
    }
    const token = header.split(" ")[1];
    try{
        const decode = jwt.verify(token,SECRET);
        req.user = decode // login user data request {id,role}
        next();
    }
    catch(e){
        res.status(401).json({message:"Invalid Token"})
    }
}
//middleware:Admin check
const isAdmin = (req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.status(403).json({message:"Admin Only"})
    }
    next();
}

 //POST Request for - Register
 app.post("/register", async(req, res) => {
    try{
        const {name, email, password, role} = req.body;
        
        //Check Validation
        if(!name || !email || !password) {
            return res.status(400).json({message: "All fields are required."});
        }

        //Email Duplicates Check
        const exists = await User.findOne({email});
        if(exists) return res.status(400).json({message: "Email already registered."});
        
        //Encrypt the password - Hash Password4
        const hash = await bcrypt.hash(password, 10);

        //Create user in DB
        await User.create({name, email, password: hash, role: role || "user" });

        res.json({message: "User Registered Successfully."});

    } catch(e) {
        res.status(500).json({message: e.message});
    }
 });

 //POST Request for - Login
 app.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body;

        //Find the email
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "User not found"});

        //Check the password
        const ok = await bcrypt.compare(password, user.password);
        if(!ok) return res.status(400).json({message: "Wrong Password"});

        res.json({
           message: "Login Success",
           token: makeToken(user),
           role: user.role 
        });
    } catch(e){
        res.status(500).json({message: e.message});
    }
 });


 //user login access
 app.get("/profile",verifyToken,(req,res)=>{
      res.json({message:"User API-Access",user:req.user});
 })
//admin login access
app.get("/admin",verifyToken,isAdmin,(req,res)=>{
    res.json({message:"Admin API-Access",user:req.user})
})
 app.listen(4000, () => console.log("Server is running in http://localhost:4000"));