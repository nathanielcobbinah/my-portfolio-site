// ProjectSlider.js

import React from 'react';
import Slider from 'react-slick';

function ProjectSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-full">
      <Slider {...settings}>
        <div>
          <img src="/images/nat-preview.png" alt="Project 1" className="max-w-full h-56" />
        </div>
        <div>
          <img src="/images/nat-preview.png" alt="Project 2" className="max-w-full h-56" />
        </div>
        <div>
          <img src="/images/nat-preview.png" alt="Project 3" className="max-w-full h-56" />
        </div>
        <div>
          <img src="/images/nat-preview.png" alt="Project 4" className="max-w-full h-56" />
        </div>
        <div>
          <img src="/images/nat-preview.png" alt="Project 5" className="max-w-full h-56" />
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;
