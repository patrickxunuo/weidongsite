import React from "react";
import './HeaderDropDown.css'

const HeaderDropDown = ({dropDown}) => {

  return (
    <ul className="header-drop-ul">
      {
        dropDown.map(item =>
          <li>{item}</li>
        )
      }
    </ul>
  )
}

export default HeaderDropDown
