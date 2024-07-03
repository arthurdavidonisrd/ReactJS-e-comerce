import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from "./CartItem"

const Cart = () => {

  const {cartItens} = useContext(ShopContext)


  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Itens</h1>
      </div>

      <div className="cartItens">
        {Products.map((produto) => {
          if(cartItens[produto.id] !== 0){
              return <CartItem data={produto}/>
          }
        })}
      </div>
      
    </div>
  )
}

export default Cart
