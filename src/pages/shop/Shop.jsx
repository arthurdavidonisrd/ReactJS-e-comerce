import React from 'react'
import { Products } from '../../products'
import Produtos from './Produtos'
import "./Shop.css"
import ShopContextProvider from '../../context/ShopContext'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Projeto ArtShop</h1>
        </div>
        <div className='products'>
            {Products.map((produtos) => 
                <Produtos data={produtos}/>
            )}

        </div>
        
      
    </div>
  )
}

export default Shop
