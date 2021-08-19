import React from "react";
import ContactUsBox from "../ContactUsBox/ContactUsBox";
import './PageFrame.css'
import NavBox from "../NavBox/NavBox";
import NewsList from "../NewsList/NewsList";

const PageFrame = () => {

  return (
    <div className="page-container">
      <img className="page-lg-img"
           src="https://www.apm-print.com/uploads/201714219/ImgScroll/ba201707071557019245451.jpg" alt=""/>
      <div className="page-body">
        <div className="page-body-left">
          <NavBox />
          <ContactUsBox/>
          <NewsList/>
        </div>
        <div className="page-body-right">

        </div>
      </div>
    </div>
  )
}

export default PageFrame
