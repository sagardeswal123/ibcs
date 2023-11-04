import React, { useState } from "react";
import left from "../../Logo/left-arrow.png"
import right from "../../Logo/right-arrow (1).png"
import "./ImageCarousel.css";
function ImageCarousel() {
  const images = [
    "https://www.straight.com/files/v3/styles/gs_feature/public/images/19/05/peacock_gettyimages-687803392.jpg?itok=FD3fsoPE",
    "https://www.heartsofpets.com/wp-content/uploads/2016/03/peacok.png",
    "https://images.pexels.com/photos/1125776/pexels-photo-1125776.jpeg?cs=srgb&dl=forest-grass-green-1125776.jpg&fm=jpg",
  ];
  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <button className='arrow' onClick={prevSlide}>
        <img   src={left} />
      </button>
     <img className='image' src={images[imageIndex]} />
    <button className='arrow' onClick={nextSlide}><img src={right}/></button>
    </div>
  );
}

export default ImageCarousel;
