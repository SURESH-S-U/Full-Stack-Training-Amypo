import axios from "axios";
import { useState } from "react";

// Backend Server API base URL
const API = "http://localhost:5000";


// Main React Component
function App(){

  // Create a state to store the login status - Login Mode or Register mode.
  const [isLogin , setIsLogin] = useState(true);

  // State to store the valuses from Form(name, email, password).
  const [form , setForm] = useState({name:"" , email:"" , password:""});

  // State to store the JWT Token(Read from browser local storage).
  const [token , setToken] = useState(localStorage.getItem("token"));


  // Register Function
  const register = async() => {
    // Send Form Data through Axios request
    await axios.post(`${API}/register`,form);
    setForm({name:"", email:"", password:""})
  }


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

      {/* Login Page - Email and Password is enough
          Register Page - Name , Email and Password needed */}

      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin && ( // It is also a type of conditional rendering.
                     // It is Best When you have Only if not If else.
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form , name: e.target.value})} />
      )}
       
      {/* Required field wont work here. Because it will only work inside the Form tag. */}
      <input type="email" placeholder="Enter Email" value={form.email} required onChange={(e) => setForm({...form, email: e.target.value})} />

      <input type="password" placeholder="Password" value={form.password} required onChange={(e) => setForm({...form, password: e.target.value})} />

      {isLogin ?
        (<button>Login</button>)
        :
        (<button onClick={register}>Register</button>)
      }

      <p onClick={() => setIsLogin(!isLogin)} style={{cursor:"pointer"}}>
        {isLogin ? "Create Account" : "Already have an account ? Login"}
      </p>

    </div>
  );

}

export default App;