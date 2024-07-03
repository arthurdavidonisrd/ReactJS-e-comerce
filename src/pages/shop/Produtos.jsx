import React from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { ShopContext } from '../../context/ShopContext'

const Produtos = (props) => {

    const {id, name, price, productImage} = props.data
    const { addToCart, cartItens } = React.useContext(ShopContext)

    const cartItemAmount = cartItens[id]
   
  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="description">
            <p>{name}</p>
            <p>${price}</p>

        </div>

        <button onClick={() => addToCart(id)} className='addToCartBttn'> 
            <FaCartArrowDown />
            Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      
    </div>
  )
}

export default Produtos
