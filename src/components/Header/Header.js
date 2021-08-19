import React from 'react';
import {Link} from 'react-router-dom'
import {headerData} from "../../data";
import './Header.css'
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import imgs from '../../Image/logo.png'


const Header =  () => {


  return(
    <header className="header-container">
      <div className="header-content">
        <div>
          <img src={ imgs } alt=""/>
        </div>
        <nav>
          <ul>
            {
              headerData.map((data,index)=>
                <li key={index}>
                  <Link to={`/${data.to}`}>{data.name}</Link>
                  {
                    data.dropDown &&
                    <HeaderDropDown dropDown={data.dropDown}/>
                  }
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
