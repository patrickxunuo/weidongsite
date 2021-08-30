import React from "react";
import './ContactUsBox.css'

const ContactUsBox = () => {

  return (
    <div className="contact-box-container">
        <h4 className="contact-box-text">Contact Us</h4>
      <div className="contact-box-line"/>
        <div className="contact-box-text">TEL :+86-755-28213226</div>
        <div className="contact-box-text">E-mail：sales@apm-print.com</div>
        <div className="contact-box-text">Address: No. 3 Building, Daerxun Technology Ind. Zone, No. 29 Pingxin North Road, Pinghu Town, Longgang,
          Shenzhen
          City, China
        </div>
      <div className="contact-box-media">
        <div>
          <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                             src="https://www.apm-print.com/images/m137/index_04.gif"/></a>
        </div>
        <div>
          <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                             src="https://www.apm-print.com/images/m137/index_05.gif"/></a>
        </div>
        <div>
          <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                             src="https://www.apm-print.com/images/m137/index_06.gif"/></a>
        </div>
        <div>
          <a href="https://www.apm-print.com/contact-us" rel="nofollow"><img className="float_l"
                                                                             src="https://www.apm-print.com/images/m137/index_07.gif"/></a>
        </div>
      </div>
    </div>
  )
}

export default ContactUsBox
