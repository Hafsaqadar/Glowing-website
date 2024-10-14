import React, { useState } from 'react'
import './header.css'

const Header = () => {


    const [menuOpen, setMenuOpen ] = useState(false);

  function toggleMenu (){
    console.log("Menu icon clicked");
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      
      <nav>
      <h1 className='logo'>glowing</h1>

{/* humburger menu */}

<div className="menu-icon" onClick={toggleMenu}>
<i className="fa-solid fa-bars"></i>
</div>



        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>       
             <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        <button className='btn1'>contact us</button>
      </nav>
    </header>
  )
}

export default Header
