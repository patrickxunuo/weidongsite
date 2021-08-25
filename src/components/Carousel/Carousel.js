import React from 'react';
import './Carousel.css'
import {carouselData} from "../../data";
import Carousel from 'react-bootstrap/Carousel'

const CarouselWidget = () => {
  return (
    <Carousel>
      {
        carouselData.map(data=>
          <Carousel.Item interval={2000}>
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
