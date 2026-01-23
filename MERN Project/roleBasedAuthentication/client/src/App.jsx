import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const  API = "http://localhost:3000";

function App() {

  // State variiable for form datas
  const [form , setForm] = useState({email: "", password: ""});

  // State to store the message
  const [msg , setMessage] = useState("");

  // State to store the token. Token will get from the browser -> Application ->  localstorage -> Token.
  const [token , setToken] = useState(localStorage.getItem("token"));

  // State to store the role. Role also will get from the browser.
  const [role , setRole] = useState(localStorage.getItem("role"));


  // Login Function
  const login = async() => {
    try{
      const res = await axios.post(API + "/login" , form);
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", res.data.role)
      setToken(res.data.token);
      setRole(res.data.role);
      setMessage("Login Success");
    }
    catch (err){
      setMessage(err.response?.data?.message || "Login Failed");
    }
  }



  // UI Contents
  if(!token){

    return (
    <div>
      
      <h2>Login</h2>
      <input type='text' placeholder='Email' value={form.email} onChange={(e) => setForm({...form,email:e.target.value})} />
      <input type='password' placeholder='Password' value={form.password} onChange={(e) => setForm({...form,password:e.target.value})} />
      <button onClick={login}>Login</button>
      <p>{msg}</p>

    </div>
  );
  }

  return(
    <div>

      <h2>Logged in:</h2>

      {/* User API button will display for both user and Admin */}
      <button onClick={userAPI}>User API</button>
      
      {/* This condition used for Display the Admin API only for Admin */}
      {role === "admin" && <button onClick={adminAPI}>Admin API</button>}

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default App;
