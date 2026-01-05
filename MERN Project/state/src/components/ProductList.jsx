import React from 'react'

const ProductList = ({cart , setCart}) => {

    const addItem = (price) => {
        // (...) Spread operator - takes all the values from array and spread.
        setCart([...cart, price]);
    }


  return (
    <div>

        <button onClick={() => addItem(100)}>Add 100</button>

        <button onClick={() => addItem(200)}>Add 200</button>

    </div>
  )
}

export default ProductList