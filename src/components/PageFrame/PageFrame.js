import React from "react";
import ContactUsBox from "../ContactUsBox/ContactUsBox";
import './PageFrame.css'
import NavBox from "../NavBox/NavBox";
import {Link, useLocation, useParams} from "react-router-dom";
import Feedback from "../../pages/Feedback/Feedback";
import ContactUs from "../../pages/ContactUs/ContactUs";
import NewsList from "../NewsList/NewsList";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Products from "../../pages/Products/Products";
import ProductList from "../../pages/ProductList/ProductList";
import ProductDetail from "../ProductDetail/ProductDetail";

const PageFrame = () => {
  const {pathname, productCate, productId} = useParams()
  const location = useLocation()
  const locations = location.pathname.split('/')
  const cate = locations[locations.length - 1]

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
              locations.map((location, index) => {
                  if (location !== '')
                    return (
                      <React.Fragment key={index}>
                        <span> > </span>
                        <span> {location} </span>
                      </React.Fragment>
                    )
                }
              )
            }
          </div>
          <div className="page-small-title">{pathname.toUpperCase()}</div>
          {!productCate &&
          <>
            {
              pathname === "about-us" &&
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
            (productCate && !productId) &&
            <>
              <ProductList cate={productCate}/>
            </>
          }
          {
            productId &&
              <ProductDetail productId={productId}/>
          }
          {/*{*/}
          {/*  locations.length === 3 &&*/}
          {/*  <>*/}
          {/*    {*/}
          {/*      pathname === "products" &&*/}
          {/*      <ProductList cate={cate}/>*/}
          {/*    }*/}
          {/*  </>*/}
          {/*}*/}
          {/*{*/}
          {/*  locations.length === 4 &&*/}
          {/*  <>*/}
          {/*    <ProductDetail/>*/}
          {/*  </>*/}
          {/*}*/}
        </div>
      </div>
    </div>
  )
}

export default PageFrame
