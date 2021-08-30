import React from "react";
import './HeaderDropDown.css'
import {Link} from "react-router-dom";

const HeaderDropDown = ({dropDown}) => {

  return (
    <ul className="header-drop-ul">
      {
        dropDown.map((item, index) =>
          <li key={index}>
            <Link to={item.to ? item.to : `/products/${item.name.toLowerCase().replaceAll(" ", "-")}`}>
              {item.name}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default HeaderDropDown
