import React from 'react';
import {productsData} from "../../data";
import './ProductList.css'
import {Link} from "react-router-dom";

const ProductList = ({cate}) => {
  const productOfCate = productsData.filter(product => product.cate.replaceAll(' ', '-').toLowerCase() === cate)
  console.log(cate)
  console.log(productsData)
  console.log(productOfCate)

  return (
    <div className="newslist-box-container">
      <div className="newslist-box-list">
        <ul className="product-list">
          {productOfCate &&
          productOfCate?.map((product, index) =>
            <li className="product-item" key={index}>
              <div className="product-left">
                <img width={150} src={product.img} alt=""/>
              </div>
              <div className="product-right">
                <Link to={`/products/${cate}/${product.id}`} target="_blank" rel="noopener noreferrer">
                  <div className="product-name">{product.name}</div>
                </Link>
                <div className="product-des">{product.description}</div>
                <Link to={`/products/${cate}/${product.id}`} target="_blank" rel="noopener noreferrer">
                  <button>Read More</button>
                </Link>
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
