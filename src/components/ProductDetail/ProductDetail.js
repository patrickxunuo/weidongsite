import React from 'react'
import './ProductDetail.css'
import {productsData} from "../../data";
import {useLocation} from "react-router-dom";


const ProductDetail = () => {
  const locations = useLocation()
  const paths = locations.pathname.split('/')
  const productId = paths[3]
  const productCate = paths[2]


  const productSelectCate = productsData.filter(product => product.cate.replaceAll(' ', '-').toLowerCase() === productCate)[0]
  const productSelectItem = productSelectCate.products.filter(product=>product.id===productId)[0]


  return (
    <div className="productdetail-Container">
      <ul className="productdetail-list">
        <li>
          <div className='productdetail-img'>
            <img width={300} src={productSelectItem.img} alt=" "/>
          </div>
        </li>
        <li>
          <div className="productdetail-right">
            <ul>
              <li>
                <h3 className="productdetail-right-name">{productSelectItem.name}</h3>
              </li>
              <li>
                <div className="productdetail-right-description">
                  {productSelectItem.description}
                </div>
              </li>
              <li>
                <p/>
                <button className="send-inquiry">Send Inquiry</button>
              </li>
              <li>
                <button className="chat-now">Chat Now</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProductDetail
