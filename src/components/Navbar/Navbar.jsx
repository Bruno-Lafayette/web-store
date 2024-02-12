import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { PiShoppingCartFill } from "react-icons/pi";


import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Web Store</Link>
        </h2>
        <ul>
            <li><Link to={`/`}><IoIosHome/></Link></li>
            <li><Link to={`/carrinho`}><PiShoppingCartFill/></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar