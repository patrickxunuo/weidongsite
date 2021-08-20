import React from 'react';
import {productsCateData} from "../../data";
import './Products.css'
import {Link, useLocation} from "react-router-dom";

const Products = () => {


  return(
    <div className="product-wrap">
      {
        productsCateData.map(data=>
          <div>
            <Link to="/products/auto-screen-printer">
              <img className="product-img" src={data.img} alt=""/>
              <h3 className="product-title">{data.name}</h3>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Products
