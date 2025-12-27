import React, { useState } from 'react'

function Counter() {

  // Use State Method.
  // Which is used for Assign a Function for Changing Variable And Declare The Initial Value.

  // Syntax: Declaration
  //    Var ChangingFunction Initaial Value  

  const [count , setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {

    if( count != 0 ){
        setCount(count - 1);
    }
  }


  return (
    <div>
        <button onClick={increment}>Increment +</button>

        <h2>Count : {count} </h2>

        <button onClick={decrement}>Decrement -</button>

        <br /><br /><br /><br /><br />

    </div>
  )
}

export default Counter