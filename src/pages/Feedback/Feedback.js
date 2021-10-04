import React from 'react';
import {useLocation} from "react-router-dom";
import './Feedback.css'

const Feedback = () => {
  const {pathname} = useLocation()

  return(
    <div>
      {
        pathname.includes('feedback')&&
        <div>
          <p>If you have any enquiry about quotation or cooperation, please feel free to email us at sales@apm-print.com or use the following enquiry form. Our sales representative will contact you within 24 hours. Thank you for your interest in our products.</p>
        </div>
      }
      <form action="" className="feedback-form">
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" required/>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone"/>
        </div>
        <div>
          <label htmlFor="Company">Company:</label>
          <input type="text" name="company"/>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="title"/>
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea name="content" placeholder="Please include details like size, weight, destination port and etc., so that we can quote the best price." required/>
        </div>
        <div>
          <input type="submit" value="Send"/>
        </div>
      </form>
    </div>
  )
}

export default  Feedback
