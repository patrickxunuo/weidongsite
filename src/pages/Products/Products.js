import React from 'react';
import {productsCateData} from "../../data";
import './Products.css'
import {Link} from "react-router-dom";

const Products = () => {


  return (
    <div className="product-wrap">
      {
        productsCateData?.map((data,index) =>
          <Link to={`/products/${data.name.toLowerCase().replaceAll(" ","-")}`} key={index}>
            <div className="product-item-wrap">
              <img className="product-img" src={data.img} alt=""/>
              <div className="product-title">
                <span>{data.name}</span>
              </div>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Products
