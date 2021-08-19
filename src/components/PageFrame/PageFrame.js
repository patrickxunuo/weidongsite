import React from "react";
import ContactUsBox from "../ContactUsBox/ContactUsBox";
import './PageFrame.css'
import NavBox from "../NavBox/NavBox";
import {Link, useLocation, useParams} from "react-router-dom";
import Feedback from "../../pages/Feedback/Feedback";
import ContactUs from "../../pages/ContactUs/ContactUs";
import NewsList from "../NewsList/NewsList";
import AboutUs from "../../pages/AboutUs";
import Products from "../../pages/Products/Products";
import ProductList from "../../pages/ProductList/ProductList";
import ProductDetail from "../ProductDetail/ProductDetail";

const PageFrame = () => {
  const {pathname} = useParams()
  const location = useLocation()
  const locations = location.pathname.split('/')
  const cate = locations[locations.length - 1]

  console.log(pathname)

  return (
    <div className="page-container">
      <img className="page-lg-img"
           src="https://www.apm-print.com/uploads/201714219/ImgScroll/ba201707071557019245451.jpg" alt=""/>
      <div className="page-body">
        <div className="page-body-left">
          <NavBox/>
          <ContactUsBox/>
        </div>
        <div className="page-body-right">
          <div className="page-body-right-title">
            <Link to="/"><span> Home </span></Link>
            {
              locations.map(location => {
                  if (location === '')
                    return <></>
                  else return (
                    <>
                      <span> > </span>
                      <span> {location} </span>
                    </>
                  )
                }
              )
            }
          </div>
          <div className="page-small-title">{pathname.toUpperCase()}</div>
          {locations.length === 2 &&
          <>
            {
              pathname === "aboutus" &&
              <AboutUs/>
            }
            {
              pathname === "feedback" &&
              <Feedback/>
            }
            {
              pathname === "contact-us" &&
              <ContactUs/>
            }
            {
              (pathname === "info" || pathname === "news") &&
              <NewsList/>
            }
            {
              pathname === "products" &&
              <Products/>
            }
          </>
          }
          {
            locations.length === 3 &&
            <>
              {
                pathname === "products" &&
                <ProductList cate={cate}/>
              }
            </>
          }
          {
            locations.length === 4 &&
            <>
              <ProductDetail/>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default PageFrame
