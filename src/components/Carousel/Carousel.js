import React, {useState} from 'react';
import './Carousel.css'
import {carouselData} from "../../data";
import Carousel from 'react-bootstrap/Carousel'

const CarouselWidget = () => {
  const [smallScreen, isSmallScreen] = useState(window.innerWidth<=500)
  return (
    <Carousel>
      {
        carouselData.map((data,index)=>
          <Carousel.Item interval={2000} key={index}>
            <img
              className="d-block w-100"
              src={data}
              alt="First slide"
            />
          </Carousel.Item>)
      }
    </Carousel>
  );
}

export default CarouselWidget
