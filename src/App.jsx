import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import ShopContextProvider from './context/ShopContext'

import './App.css'

function App() {

  return (
    <>
    <ShopContextProvider>
      <Router>
        <Navbar /> 

        <Routes>
            <Route exact path="/" element={ <Shop /> }/>
            <Route path="/cart" element={ <Cart /> }/>
        </Routes>
      </Router>

    </ShopContextProvider>
    
    </>
    
  )
}

export default App
