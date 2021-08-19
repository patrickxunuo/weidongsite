import React from 'react';
import {productsData} from "../../data";
import './ProductList.css'

const ProductList = ({cate}) => {
  console.log(cate)
  const productOfCate = productsData.filter(product => product.cate.replaceAll(' ', '-').toLowerCase() === cate)[0]


  return (
    <div className="newslist-box-container">
      <div className="newslist-box-list">
        <ul className="product-list">
          {
            productOfCate.products.map(product =>
              <li className="product-item">
                <div className="product-left">
                  <img width={150} src={product.img} alt=""/>
                </div>
                <div className="product-right">
                  <div className="product-name">{product.name}</div>
                  <div className="product-des">{product.description}</div>
                  <button>Read More</button>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ProductList
