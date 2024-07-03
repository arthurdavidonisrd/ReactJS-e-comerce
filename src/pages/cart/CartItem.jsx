import React from 'react'
import "./CartItem.css"

const CartItem = (props) => {

    const {id, name, price, productImage} = props.data

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className="description">
            <p>{name}</p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default CartItem
