import React from "react";

const Benefits = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 bg-black min-h-screen py-10">
      <div className="text-white text-4xl md:text-6xl font-abc font-bold flex justify-center">
        Benefits
      </div>
      <p className="text-white font-abc text-lg md:text-xl lg:text-2xl text-center pt-6 md:pt-14 font-light tracking-wide">
        There are several benefits to joining the barber online community offered by Beard Friends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-16">
        <div className="col-span-1">
          <div className="flex justify-center">
            <img
              src="assets/benefit1.png"
              className="w-[210px] md:w-[260px] lg:w-[210px] pb-5 object-contain"
              alt=""
            />
          </div>
          <p className="text-white text-center text-sm md:text-base lg:text-lg tracking-wide">
            Users can find nearby barber shops and connect with other like-minded individuals who are passionate about proper beard maintenance
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center">
            <img
              src="assets/benefit2.png"
              className="w-[210px] md:w-[260px] lg:w-[300px] pb-5 object-contain"
              alt=""
            />
          </div>
          <p className="text-white text-center text-sm md:text-base lg:text-lg tracking-wide">
            Users can find nearby barber shops and connect with other like-minded individuals who are passionate about proper beard maintenance
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center">
            <img
              src="assets/benefit3.png"
              className="w-[210px] md:w-[260px] lg:w-[300px] pb-[1.5rem] object-contain"
              alt=""
            />
          </div>
          <p className="text-white text-center text-sm md:text-base lg:text-lg tracking-wide">
            Users can find nearby barber shops and connect with other like-minded individuals who are passionate about proper beard maintenance
          </p>
        </div>
      </div>
      <div className="pt-10 px-2 md:px-4 flex justify-center items-center">
        <p className="text-white text-center text-sm md:text-base lg:text-lg">
          Additionally, the community provides a wealth of resources and knowledge, including tips, advice, and tutorials from experienced professionals and fellow enthusiasts. Joining this community can help individuals stay up-to-date with the latest trends and techniques, connect with others who share their interests, and take their beard grooming to the next level.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
