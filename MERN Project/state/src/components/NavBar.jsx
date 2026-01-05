import React from 'react'

const NavBar = ({cartCount}) => {
  return (
    <div>
        Cart Items : {cartCount}
    </div>
  )
}

export default NavBar