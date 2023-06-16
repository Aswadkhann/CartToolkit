import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const images = [
    {
      id:1,
      url:'assets/card1.png',
      post:'Top'
    },
    {
      id:2,
      url:'assets/card2.png',
      post:'2nd'
    },
    {
      id:3,
      url:'assets/card3.png',
      post:'3rd'
    },
    {
      id:3,
      url:'assets/card3.png',
      post:'3rd'
    },


  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
   <div className=' px-10'>
    <Slider {...settings} className=''>
      {images.map(({url,id,post})=>(
        <div key={id}>
        <Card 
        url={url}
          id={id}
          post={post}
        />
      </div>
      ))}
    </Slider>
    </div>
  );


}

export default Carousel;
