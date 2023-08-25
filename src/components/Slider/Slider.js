import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss"

function HeaderSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="container">
      <div className="slider-content overflow-x-hidden py-4">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src="https://github.com/vishal-arora96/snapup-redux/blob/master/src/assets/images/slider_img_1.jpg?raw=true"
              alt=""       
            />
          </div>
          <div className="slider-item">
            <img
              src="https://github.com/vishal-arora96/snapup-redux/blob/master/src/assets/images/slider_img_2.jpg?raw=true"
              alt=""           
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HeaderSlider;
