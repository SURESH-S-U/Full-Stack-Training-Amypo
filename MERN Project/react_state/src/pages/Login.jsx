import React from 'react'

function Login() {

    // Concept : Conditional Rendering.

  const isLoggedIn = true;

  const HasMessage = true;

  return (
    <div>

        {/* Using Ternary Operator. */}
        {isLoggedIn ? "Welocome to Our page." : "Login Failed, Please Login Again !"}

        {/* Using ANd Operator. */}
        {HasMessage && <p>You have a new Message</p> }

        <br /><br /><br /><br />

    </div>
  )
}

export default Login