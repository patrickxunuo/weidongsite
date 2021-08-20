import React from "react";
import './HeaderDropDown.css'

const HeaderDropDown = ({dropDown}) => {

  return (
    <ul className="header-drop-ul">
      {
        dropDown.map((item,index) =>
          <li key={index}>{item}</li>
        )
      }
    </ul>
  )
}

export default HeaderDropDown
