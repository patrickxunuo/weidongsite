import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './NavBoxExpand.css'

const NavBoxExpand = ({subCate, cateName}) => {
  const [isExpand, setIsExpand] = useState(false)

  return (
    <li>
      <div className="nav-expand">
        <div className="nav-box-text">{cateName}</div>
        <div className="nav-box-btn-expand" style={isExpand?{transform:"rotate(90deg)"}:{transform:"rotate(0deg)"}}>
          <FontAwesomeIcon icon={faChevronRight} onClick={() => setIsExpand(!isExpand)}/>
        </div>
      </div>
      <ul style={isExpand ? {height: 'auto', display: 'block'} : {height: 0, display: 'none'}}>{
        subCate.map((cate, index) =>
          <li key={index} className="nav-sub-box-text">{cate.name}</li>
        )
      }
      </ul>
    </li>
  )
}

export default NavBoxExpand
