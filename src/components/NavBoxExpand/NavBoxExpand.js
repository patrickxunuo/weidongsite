import React, {useState} from "react";

const NavBoxExpand = ({navItem}) => {
  const [isExpand, setIsExpand] = useState(false)

  return (
    <li>
      <div className="nav-expand">
        <div className="nav-box-text">{navItem.listTitle}</div>
        <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt=""
          onClick={()=>setIsExpand(!isExpand)}
        />
      </div>
      <ul style={isExpand?{height:'auto',display:'block'}:{height:0, display:'none'}}>{
        navItem.subTitle.map(subTitle =>
          <li className="nav-sub-box-text">{subTitle}</li>
        )
      }
      </ul>
    </li>
  )
}

export default NavBoxExpand
