import React from 'react'
import './ShowCase.css'

const ShowCase = ({data}) => {
    return(
        <div className="showcase-container">
            <div className="showcase-img">
                <img src={data?.img} alt=" " />
            </div>
            <h3>{data?.title}</h3>
            <div className="showcase-img-caption">
              <p>
                {data?.text}
              </p>
            </div>
          <div>
            <button className="showcase-img-button">Learn More</button>
          </div>
        </div>
    )
}

export default ShowCase
