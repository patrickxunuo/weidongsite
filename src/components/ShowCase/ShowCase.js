import React from 'react'
import './ShowCase.css'

const ShowCase = ({data}) => {
  return (
    <div className="showcase-container">
      <div>
        <img className="showcase-img" src={data?.img} alt=" "/>
      </div>
      <div>
        <h3>{data?.title}</h3>
      </div>
      <div className="showcase-img-caption">
        <p>
          {data?.text}
        </p>
      </div>
      <div>
        <button className="showcase-btn">Learn More</button>
      </div>
    </div>
  )
}

export default ShowCase
