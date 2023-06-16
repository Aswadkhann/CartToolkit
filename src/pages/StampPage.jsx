
import React from 'react';

const StampPage = () => {
  return (
    <div className="bg-[#1C1C1E] text-white h-[120vh] pt-4 md:h-[80vh] pl-8 pr-8 md:pl-12 md:pr-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl pt-8">Digital Stamps</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="w-full md:w-2/3 text-justify leading-8">
          <p>
            Attention all beard enthusiasts! We are excited to announce the annual Beard Contest happening Right Now.
            Whether you have a full beard, a stylish mustache, or a unique facial hair design, this contest is for you!
            We invite all men who have put time and effort into growing and grooming their beards to come and showcase
            their impressive facial hair styles. There will be various categories to enter, including full beard, partial
            beard, mustache, and freestyle.
          </p>
          <button className="mt-4 bg-white text-black py-2 px-4 rounded-lg font-semibold">
            Read More <span className="pl-2">&rarr;</span>
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="assets/stamp.png" alt="" className="w-full md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default StampPage;
