import React from 'react'

const Product = ({count , setCount}) => {
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Add to cart</button>    &nbsp;
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Product