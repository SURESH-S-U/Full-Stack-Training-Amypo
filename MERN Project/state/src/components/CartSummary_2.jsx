import React from 'react'

const CartSummary_2 = ({cart}) => {

    // Count total
    // reduce() - add all items price together.(It shows a single final value)
    // sum - total values
    // price - current product price
    // total - is final amount
    // 0 - Initial value of total

    const  total = cart.reduce((sum , price) => sum + price , 0);

  return (
    <div>

        <h3>Total Amount : {total}</h3>

    </div>
  )
}

export default CartSummary_2