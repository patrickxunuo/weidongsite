import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import './Header.css'
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import largeIcon from '../../assets/logo.png'
import {productsCateData} from "../../data";
import smallIcon from '../../assets/logoS.png'
import {Input} from "antd";
import {AnimatePresence, motion} from 'framer-motion'


const Header = () => {
  const [showSider, setShowSider] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500)
  const {Search} = Input
  const {pathname} = useLocation()

  useEffect(() => {
    setShowSider(false)
  }, [pathname])

  const variants = {
    initial: {
      x: isSmallScreen ? -500 : 0,
    },
    animate: {
      x: 0,
      transition: {duration: 0.5, ease: 'easeOut'}
    },
    exit: {
      x: -500,
      transition: {duration: 0.5, ease: 'easeInOut'}
    }
  }


  return (
    <header className="header-container">
      <div className="header-mobile">
        <img className="header-small-icon" src={smallIcon} alt=""/>
        <Search placeholder="Search products" enterButton/>
        <div className="header-hamburger-container" onClick={() => setShowSider(showSider => !showSider)}>
          <div className="header-hamburger"/>
        </div>
      </div>
      <AnimatePresence>
        {(showSider || !isSmallScreen) &&
        <motion.div className="header-content" variants={variants} initial="initial" animate="animate" exit="exit">
          <div>
            <img className="header-large-icon" src={largeIcon} alt=""/>
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
                  {name: "Product Introduction", to: '/news'},
                  {name: "News", to: '/news'},
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
        </motion.div>
        }
      </AnimatePresence>
    </header>
  )
}

export default Header
