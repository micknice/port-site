import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class SimpleSlider extends Component {
  render() {
    const { imgArr } = this.props; 
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Slider {...settings}>
          {imgArr.map((skinscanImg, index) => (
            <div key={index} className="relative">
              <Image
                className="absolute z-1"
                layout="fill"
                objectFit="cover"
                src={skinscanImg}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}






