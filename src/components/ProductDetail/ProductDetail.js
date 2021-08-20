import React from 'react'
import './ProductDetail.css'
import {productsData} from "../../data";
import {useLocation} from "react-router-dom";
import ProductTabs from "../ProductTabs/ProductTabs";
import ContactUsBox from "../ContactUsBox/ContactUsBox";
import Feedback from "../../pages/Feedback/Feedback";


const ProductDetail = () => {
  const locations = useLocation()
  const paths = locations.pathname.split('/')
  const productId = paths[3]
  const productCate = paths[2]


  const productSelectCate = productsData.filter(product => product.cate.replaceAll(' ', '-').toLowerCase() === productCate)[0]
  const productSelectItem = productSelectCate.products.filter(product => product.id === productId)[0]


  return (
    <div className="productdetail-Container">
      <ul className="productdetail-list">
        <li>
          <div className='productdetail-img'>
            <img width={400} src={productSelectItem.img} alt=" "/>
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
      <div>
        <ProductTabs product={productSelectItem}/>
      </div>
      <div>
        <ul className="product-tab">
          <li className="fixed-tab">Related Product</li>
        </ul>
      </div>
      <div>
        <iframe width="412" height="232" src="https://www.youtube.com/embed/bHQqvYy5KYo" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
      <div>
        <ul className="product-tab">
          <li className="fixed-tab">Inquiry</li>
        </ul>
        <Feedback/>
      </div>
    </div>
  )
}

export default ProductDetail
