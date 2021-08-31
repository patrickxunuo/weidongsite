import React from "react";
import './NavBox.css'
import {Link, useLocation} from "react-router-dom";
import NavBoxExpand from "../NavBoxExpand/NavBoxExpand";
import {productsCateData} from "../../data/"


const NavBox = () => {
  const {pathname} = useLocation()
  const pageName = pathname.split('/')[1]

  return (
    <div className="nav-box-container">
      <h4 className="nav-box-text">{pageName.replace("-"," ").toUpperCase()}</h4>
      <div className="nav-box-line"/>
      <div className="nav-box-list">
        {
          (pageName === "about-us" || pageName==="contact-us" ||pageName==="feedback") ?
          <ul>
            <li><Link to="/about-us"><div className="nav-box-text">About Us</div></Link></li>
            <li><Link to="/contact-us"><div className="nav-box-text">Contact Us</div></Link></li>
            <li><Link to="/feedback"><div className="nav-box-text">Feedback</div></Link></li>
          </ul>:
            <ul>
              {
                productsCateData.map((cate, index) =>
                  !cate.subCate ?
                    <li key={index}>
                      <Link to={`/products/${cate.name.toLowerCase().replaceAll(" ","-")}`}>
                        <div className="nav-box-text">{cate.name}</div>
                      </Link>
                    </li>
                    : <NavBoxExpand key={index} cateName={cate.name} subCate={cate.subCate}/>
                )
              }
            </ul>
        }
      </div>
    </div>
  )
}

export default NavBox
