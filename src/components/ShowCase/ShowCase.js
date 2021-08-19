import React from 'react'
import './ShowCase.css'

const ShowCase = () => {
    return(
        <div className="showcase-container">
            <div className="showcase-img">
                <img src="https://www.apm-print.com/Content/upload/2017225852/201708071743568264501.jpg
" alt=" " />
            </div>
            <h3>Our Factory</h3>
            <div className="showcase-img-caption">
                Established in 1997, our company is one of the oldest manufacturer with the ability to design and build fully automatic multi-color printing machines for glass and plastic substrates, such as wine caps, water bottle caps, water bottles, glass bottles, mascara bottles, lipsticks, jars, powder cases, shampoo bottles, etc.
            </div>
            <button className="showcase-img-button">Learn More</button>
        </div>
    )
}

export default ShowCase