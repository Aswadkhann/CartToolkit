import React from 'react';
import Carousel from '../components/CardComponents/CardCarousel';

const Shop = () => {
  return (
    <div className="h-[60vh] md:h-[70vh] text-white bg-[#1C1C1E]  pl-8 pr-8 md:pl-12 md:pr-12">
      <div className="flex justify-center py-10">
        <h1 className="text-6xl font-abc font-bold">Barber Shops</h1>
      </div>
      <div className="">
        <Carousel />
      </div>
      <div className="flex justify-center pt-10">
        <button className="font-medium capitalize bg-purple-600 px-6 py-2 rounded-lg">
          <span className="pr-2">View All</span>&rarr;
        </button>
      </div>
    </div>
  );
};

export default Shop;
