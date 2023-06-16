import React from "react";
import Carousel from "../components/CardComponents/CardCarousel";

const BeardContest = () => {
  return (
    <div className="bg-[#1C1C1E] text-white h-[100vh] w-screen  pl-8 pr-8 md:pl-12 md:pr-12">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-8">Contribute in our Beard Contest</h1>
      </div>
      <p className="py-6 leading-7 md:leading-9 text-justify font-light text-[15px]">
        Attention all beard enthusiasts! We are excited to announce the annual
        Beard Contest happening Right Now. Whether you have a full beard, a
        stylish mustache, or a unique facial hair design, this contest is for
        you! We invite all men who have put time and effort into growing and
        grooming their beards to come and showcase their impressive facial hair
        styles. There will be various categories to enter, including full beard,
        partial beard, mustache, and freestyle.
      </p>
      <div className="mt-0 md:mt-6">
        <Carousel />
      </div>
      <div className="flex justify-center mt-10">
        <button className="font-medium capitalize bg-purple-600 px-6 py-2 rounded-lg">
          <span className="pr-2">View All</span>&rarr;
        </button>
      </div>
    </div>
  );
};

export default BeardContest;
