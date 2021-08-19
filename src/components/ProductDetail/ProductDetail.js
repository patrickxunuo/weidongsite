import React from 'react'
import './ProductDetail.css'
import {productsData} from "../../data";


const ProductDetail = ({cate}) => {
    const productDetails = productsData.filter(product => product.cate.replaceAll(' ', '-').toLowerCase() === cate)[0]


    return(
        <div className="productdetail-Container">
            <ul className="productdetail-list">
                <li>
                    <div className='productdetail-img'>
                        <img width={300} src="https://www.apm-print.com/uploads/201714219/p201707201553010862089.jpg" alt=" "/>
                    </div>
                </li>
                <li>
                    <div className="productdetail-right">
                        <ul>
                            <li>
                                <h3 className="productdetail-right-name">Automatic Servo Glass Bottle Screen Printer</h3>
                            </li>
                            <li>
                                <div className="productdetail-right-description">This Automatic Glass Bottle Screen Printer which fits for square glass bottle, oval glass bottle and cylindrical glass bottle screen printing.</div>
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

export default  ProductDetail