import { useState } from 'react';
import './App.css';
import axios from 'axios'
const API = "http://localhost:4000";

function App(){
   //State Variable for form datas
    const[form, setForm] = useState({ email: "", password:"" });
    //State to store the message
    const [msg, setMsg] = useState("");

    //State to store the token
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [role, setRole] = useState(localStorage.getItem("role"));

    //Login Function
    const login = async() => {
      try{
        const res = await axios.post(API + "/login", form);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("role",res.data.role);
        setToken(res.data.token);
        setRole(res.data.role);
        setMsg("Login Success");
      }
      catch(e){
        setMsg(e.response?.data?.message || "Login Failed");
      }
    }
    const userAPI = async () =>{
      try{
        const res = await axios.get(API + "/profile",{
          headers:{Authorization:"Bearer " + token}
        })
       setMsg(res.data.message)
    }
    catch(e){
      setMsg("Token Invalid / Login Again")
    }
  }
  const adminAPI = async()=>{
    try{
      const res = await axios.get(API + "/admin",{
        headers:{Authorization:"Bearer " + token}
      })
      setMsg(res.data.message);
    }
    catch(e){
      setMsg(e.response?.data?.message || "Access Denied")
    }
  }
  const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
    setMsg("")
  }

  if(!token){
    return (
      <div>
        <h2>Login</h2>
          <input type='text' placeholder='Email' onChange={(e) => setForm({...form, email: e.target.value})} />
          <input type='password' placeholder='Password' onChange={(e) => setForm({...form, password: e.target.value})} />
          <button onClick={login}>Login</button>
          <p>{msg}</p>
      </div>
  );
  }

  return (
    <div>
      <h2>Logged In:</h2>
      {/* UserAPI button wil display for both User and Admin */}
      <button onClick={userAPI}>User API</button>

      {/* Condition - Only displays if the role is admin */}
      {role === "admin" && <button onClick={adminAPI}>Admin API</button> }

      <button onClick={logout}>Logout</button>
      <p>{msg}</p>

    </div>
  );
  }
export default App;