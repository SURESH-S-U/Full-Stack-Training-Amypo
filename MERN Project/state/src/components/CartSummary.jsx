import React from 'react'

const CartSummary = ({count}) => {
  return (
    <div>
        <h3>Items in Cart : {count}</h3>
    </div>
  )
}

export default CartSummary