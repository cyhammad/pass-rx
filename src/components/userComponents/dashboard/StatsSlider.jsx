"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import SubscriptionCard from "./SubscriptionCard";

const StatSlider = () => {
  const [current, setCurrent] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    initialSlide: 0,
    beforeChange: (prev, next) => {
      setCurrent(next);
    },
    // responsive: [
    //   {
    //     breakpoint: 1281,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 807,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 511,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],

    appendDots: (dots) => (
      <div
        style={{
          bottom: "-10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    customPaging: (index) => (
      <div
        className={`h-2 w-2 rounded-full bg-primary ${
          index === current ? "opacity-100" : "opacity-50"
        }`}
      ></div>
    ),
  };
  return (
    <Slider {...settings}>
      <Card1 />
      <Card2 />
      <Card3 />
      <SubscriptionCard />
    </Slider>
  );
};

export default StatSlider;
