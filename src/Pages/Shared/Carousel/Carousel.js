import React from "react";
import img3 from "../../../Assets/Images/img3.webp";
import img2 from "../../../Assets/Images/img2.jpg";
import img1 from "../../../Assets/Images//img3.webp";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
      
        <div id="item1" className="carousel-item w-full">
          <img src={img1} alt='' />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        
      </div>
    </div>
  );
};

export default Carousel;
