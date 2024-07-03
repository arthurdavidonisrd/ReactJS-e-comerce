import React from 'react'
import {Link} from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa";
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">Shop </Link>
            <Link to="/cart" >
                 <FaCartArrowDown  size={32}/>
             </Link>
        </div>

    </div>
  )
}

export default Navbar
