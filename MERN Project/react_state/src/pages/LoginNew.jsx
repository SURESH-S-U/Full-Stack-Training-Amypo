import React, { useState } from 'react'

function LoginNew() {

  const [log , setLog] = useState(false);

  return (
    <div>
        <button onClick={() => setLog(!log)}> {log ? "Log Out" : "Log In"} </button>
        {log ? <h2>Welcome You are Logged in 💐</h2> : <h2>Login Please ! 🔐</h2>}
    </div>
  )
}

export default LoginNew