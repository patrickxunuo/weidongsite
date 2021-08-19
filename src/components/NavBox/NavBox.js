import React from "react";
import './NavBox.css'
import {useLocation} from "react-router-dom";
import {pageData} from "../../data/";
import NavBoxExpand from "../NavBoxExpand/NavBoxExpand";

const NavBox = () => {
  const {pathname} = useLocation()

  const thisPageData = pageData.filter(data => pathname.includes(data.page))


  return (
    <div className="nav-box-container">
      <h4 className="nav-box-text">{thisPageData[0].title}</h4>
      <div className="nav-box-line"/>
      <div className="nav-box-list">
        <ul>
          {
            thisPageData[0].nav.map(navItem =>
              typeof (navItem) === 'string' ?
                <li>
                  <div className="nav-box-text">{navItem}</div>
                </li>
                : <NavBoxExpand navItem={navItem}/>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBox
