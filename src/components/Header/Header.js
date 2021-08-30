import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import imgs from '../../assets/logo.png'
import {productsCateData} from "../../data";

const Header = () => {


  return (
    <header className="header-container">
      <div className="header-content">
        <div>
          <img src={imgs} alt=""/>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products">
                Product
              </Link>
              <HeaderDropDown dropDown={productsCateData}/>
            </li>
            <li>
              <Link to="/news">
                News
              </Link>
              <HeaderDropDown dropDown={[
                {name:"Product Introduction",to: '/news'},
                {name:"News", to:'/news'},
              ]} type/>
            </li>
            <li>
              <Link to="/info">
                Industry Knowledge
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/feedback">
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
