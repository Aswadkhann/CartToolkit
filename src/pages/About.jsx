import React from "react";
import '../components/style.css';

const About = () => {
  return (
    <div className="bg-black text-white h-[120vh] md:h-[90vh] w-screen flex flex-col md:flex-row justify-center  pl-8 pr-8 md:pl-12 md:pr-12">
      <div className="w-auto md:w-[400px] md:pt-0 pt-4 flex items-center">
        <img src="assets/Rectangle 3.png" alt="" className="about-img" />
      </div>
      <div className=" md:flex-1 flex flex-col pt-[88px] items-start pl-0 md:pl-6 font-abc  ">
        <h1 className="font-extrabold text-4xl md:text-5xl mb-3">About Our Community</h1>
        <p className="font-light leading-7  md:leading-9 py-5 text-justify">
          Barber shops have been an integral part of communities for centuries.
          They are more than just places to get a haircut; they are social hubs
          where people gather to catch up on the latest news, share stories, and
          build relationships. Barber shops are where fathers take their sons
          for their first haircuts, where friends meet for a quick trim before a
          night out, and where older men come for the familiar comfort of a
          routine shave. Barber shops foster a sense of community by providing a
          space where people can come together and connect, creating a sense of
          belonging that extends far beyond a simple grooming appointment.
        </p>
        <button className="font-extrabold text-2xl mt-7">
          <a href="/" className="font-medium text-2xl">
            Learn more
          </a>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default About;
