import React from 'react';
import ShowCase from "../components/ShowCase/ShowCase";
import {showcaseData} from "../data";
import HotProduct from "../components/HotProduct/HotProduct";
import HomeNews from "../components/HomeNews/HomeNews";
import CarouselWidget from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <CarouselWidget/>
      <div className="home-showcase">
        {
          showcaseData.map((data,index)=>
            <ShowCase key={index} data={data}/>
          )
        }
      </div>
      <div className="home-hotproduct">
        <div><h2>Hot Products</h2></div>
        <div className="home-hotproduct-wrap">
          <HotProduct />
          <HotProduct />
          <HotProduct />
          <HotProduct />
          <HotProduct />
          <HotProduct />
          <HotProduct />
          <HotProduct />
        </div>
      </div>
      <div className="home-news">
        <div><h2>News Center</h2></div>
        <div className="home-news-wrap">
          <HomeNews />
          <HomeNews />
          <HomeNews />
          <HomeNews />
        </div>
      </div>
    </div>
  )
}

export default Home
