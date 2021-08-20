import React from 'react';
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ShowCase from "../components/ShowCase/ShowCase";
import Carousel from "../components/Carousel/Carousel";
import {showcaseData} from "../data";
import HotProduct from "../components/HotProduct/HotProduct";
import HomeNews from "../components/HomeNews/HomeNews";

const Home = () => {
  return (
    <div>
      <Carousel/>
      {/*<ProductDetail/>*/}
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
