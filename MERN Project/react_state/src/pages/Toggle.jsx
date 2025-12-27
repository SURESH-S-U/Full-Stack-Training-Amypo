import React, { useState } from 'react'

function Toggle() {

  const [show , setShow] = useState(false);

  return (
    <div>

        <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} </button>
        {show && <p>Hello MERN Stack Students</p>}

        <br /><br /><br />

    </div>
  )
}

export default Toggle