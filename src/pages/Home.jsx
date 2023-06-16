import React from "react";

const Home = (props) => {
  
  return (
    <div className="bg-[#1C1C1E] md:h-[90vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-12 font-abc bg-no-repeat bg-[no-repeat]">
      <div className="w-full md:w-[626px] mt-10 md:mt-0 ">
        <h1 className="font-extrabold text-4xl md:text-5xl text-white">Beard Friends</h1>
        <p className="text-[#D9D9D9] text-justify leading-7 md:leading-9 py-4 pr-0 md:pr-6">
          The barber online community offered by Beard Friends is a great way
          for individuals to connect and share their passion for proper beard
          maintenance. The community allows users to find nearby barber shops,
          participate in beard contests, and shop for grooming items, all while
          connecting with other like-minded individuals. Whether you're a
          seasoned beard enthusiast or just starting out, the community provides
          a platform to learn, share, and grow together. With a supportive and
          knowledgeable community at your fingertips, maintaining a healthy and
          stylish beard has never been easier.
        </p>

        <button className="font-medium text-white capitalize bg-purple-600 px-4 py-2 rounded-lg">
          Register Now
        </button>
      </div>
      <div className="">
        <img src={props.imglink} alt="" className="rounded-lg w-[550px] h-auto py-8" />
      </div>
    </div>
  );
};

export default Home;
