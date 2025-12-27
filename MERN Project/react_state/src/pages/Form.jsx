import React, { useState } from 'react'

function Form() {

  const [name , setName] = useState("");

  return (
    <div>
        <input type="text" placeholder='Enter your name.' onChange={(e) => { setName(e.target.value)} }/>
        <h1>Hello , {name} </h1>

        <br /><br /><br />

    </div>
  )
}

export default Form