import React, {useState} from 'react';
import {carouselData} from "../../data";
import './Carousel.css'

const Carousel = () => {
  const [car,setCar] = useState(0)

  return(
   <div className="car-container">
         <img src={carouselData[car]} alt=""/>
     <div className="car-control">
       {
         carouselData.map((car,index)=>
           <div className="car-dot" key={index} onClick={()=>setCar(index)}/>
         )
       }
     </div>
   </div>
  )
}

export default Carousel
