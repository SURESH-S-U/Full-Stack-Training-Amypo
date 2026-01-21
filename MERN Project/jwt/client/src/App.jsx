const { useState } = require("react");

// Backend Server API base URL
const API = "http://localhost:4000";


// Main React Component
function app(){

  // Create a state to store the login status - Login Mode or Register mode.
  const [isLogin , setIsLogin] = useState(true);

  // State to store the valuses from Form(name, email, password).
  const [form , setForm] = useState({name:"" , email:"" , password:""});

  // State to store the JWT Token(Read from browser local storage).
  const [token , setToken] = useState(localStorage.getItem("token"));

  // Logged UI - After Login
  if(token){    
    return (   // Reruen can be inside the Conditional rendering.
      <div>
        <h2>Welcome! You Logged In.</h2>
        <button>Logout</button>
      </div>
    );
  }

  return (
    <div>
       <h2>{isLogin ? "Login" : "Register"}</h2>
       {isLogin}
    </div>
  );

}