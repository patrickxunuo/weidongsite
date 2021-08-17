import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header =  () => {
  return(
    <header className="header-container">
      <div className="header-content">
        <div>
          <img src="https://www.apm-print.com/uploads/201714219/logo225852.png" alt=""/>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li>Product</li>
            <li>News</li>
            <li>Industry Knowledge</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
