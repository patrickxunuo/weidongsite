import React from 'react';
import './Footer.css'
import imgs from '../../assets/logoS.png'
import {Link} from "react-router-dom";
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import {productsCateData} from "../../data";

const Footer = () => {

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-container">
          <div className="footer-content">
            <h4>PRODUCT</h4>
            <div>Glass Bottle Screen Printer</div>
            <div>Auto Screen Printer</div>
            <div>Hot Stamping Machines</div>
            <div>Automatic Screen Printing and</div>
            <div>Hot Stamping Machine</div>
            <div>Semi Auto Screen Printer</div>
            <div>Semi Auto Hot Stamping</div>
            <div>Machine</div>
          </div>
          <div className="footer-content">
            <h4>SUBSCRIBE TO US</h4>
            <div>Get Offer</div>
            <div>Subscribe to receive our Offer</div>
            <form action="">
              <input type="text" placeholder="Enter your name"/>
              <input type="text" placeholder="Enter your email"/>
              <input type="submit" value="Submit"/>
            </form>
            <div>We respect your privacy</div>
          </div>
          <div className="footer-content">
            <h4>CONTACT US</h4>
            <div>TEL :+86-755-28213226</div>
            <div>E-mail：sales@apm-print.com</div>
            <div>No. 3 Building, Daerxun Technology Ind. Zone, No. 29 Pingxin North Road, Pinghu Town, Longgang,
              Shenzhen
              City, China
            </div>
            <div className="footer-media">
              <div>
                <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                                   src="https://www.apm-print.com/images/m137/index_04.gif"/></a>
              </div>
              <div>
                <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                                   src="https://www.apm-print.com/images/m137/index_05.gif"/></a>
              </div>
              <div>
                <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                                   src="https://www.apm-print.com/images/m137/index_06.gif"/></a>
              </div>
              <div>
                <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                                   src="https://www.apm-print.com/images/m137/index_07.gif"/></a>
              </div>
            </div>
          </div>
          <div>
            <img src={imgs} alt=""/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <ul>
              <li>
                <Link to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/news">
                  News
                </Link>
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
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer-copyright">
            Copyright © Automatic Packing Machine Co.,Limited (APM) All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
