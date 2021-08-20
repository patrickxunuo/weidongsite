import React, {useEffect, useState} from 'react';
import {carouselData} from "../../data";
import './Carousel.css'

const Carousel = () => {
  const [car, setCar] = useState(0)
  let intervalId = null

  useEffect(() => {
    intervalId = setInterval(() => {
      changeCar()
    }, 2000)
  }, [])

  useEffect(() => {
    console.log(car)
    if (car === 3) {
      setTimeout(()=>setCar(0),1000)
    }
  }, [car]);


  const changeCar = () => {
    setCar(car => car + 1)
  }

  const handleClick = (index) => {
    setCar(index)
  }

  return (
    <div className="car-container">
      <img src={car===4?carouselData[0]:carouselData[car]} alt=""/>
      <div className="car-control">
        {
          carouselData.map((data, index) =>
            <div className="car-dot" style={index===car?{background:'black'}:{background:'grey'}} key={index} onClick={() => handleClick(index)}/>
          )
        }
      </div>
    </div>
  )
}

export default Carousel
