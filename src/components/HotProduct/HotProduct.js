import React from 'react';
import './HotProduct.css'

const HotProduct = () => {

  return(
    <div className="hotproduct-container">
      <div>
        <img src="https://www.apm-print.com/uploads/201814219/small/multicolor-bottle-automatic-screen-printer10063776366.jpg" alt=""/>
      </div>
      <div className="hotproduct-name">Multicolor Bottle Automatic Screeb</div>
      <div className="hotproduct-des">
        <p>
          The APM-S102 is designed for multi-color decoration of...
        </p>
      </div>
      <div>
        <button className="hotproduct-button">Continue Reading</button>
      </div>
    </div>
  )
}

export default HotProduct
