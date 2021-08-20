import React from "react";
import './NavBox.css'
import {Link, useLocation} from "react-router-dom";
import {pageData} from "../../data/";
import NavBoxExpand from "../NavBoxExpand/NavBoxExpand";

const NavBox = () => {
  const {pathname} = useLocation()

  const thisPageData = pageData.filter(data => pathname.includes(data.page))[0]

  const {type, title} = thisPageData

  return (
    <div className="nav-box-container">
      <h4 className="nav-box-text">{title}</h4>
      <div className="nav-box-line"/>
      <div className="nav-box-list">
        <ul>
          {
            thisPageData?.nav.map((navItem,index) =>
             !navItem.hasOwnProperty("subTitle") ?
                <li key={index}>
                  <Link to={navItem.to}>
                    <div className="nav-box-text">{navItem.title}</div>
                  </Link>
                </li>
                : <NavBoxExpand key={index} navItem={navItem}/>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBox
