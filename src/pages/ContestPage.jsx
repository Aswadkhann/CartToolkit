import React from "react";
import Progressbar from "../components/Progressbar";
import Card from "../components/CardComponents/Card";


const ContestPage = () => {
  const info = [
    {
      id: 1,
      url: "assets/card1.png",
    },
    {
      id: 2,
      url: "assets/card2.png",
    },
    {
      id: 3,
      url: "assets/card3.png",
    },
    {
      id: 4,
      url: "assets/card1.png",
    },
    {
      id: 5,
      url: "assets/card2.png",
    },
    {
      id: 6,
      url: "assets/card3.png",
    },
    {
      id: 7,
      url: "assets/card1.png",
    },
    {
      id: 8,
      url: "assets/card2.png",
    },
    {
      id: 9,
      url: "assets/card3.png",
    },
    {
      id: 10,
      url: "assets/card1.png",
    },
    {
      id: 11,
      url: "assets/card2.png",
    },
    {
      id: 12,
      url: "assets/card3.png",
    },
  ];

  const showLimitedCards = window.innerWidth <= 768; // Check if the screen width is smaller or equal to 768px

  return (
    <div className="pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 py-4 h-auto bg-[#1C1C1E]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-white text-3xl font-abc font-normal">
            Contest Ends In
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="mb-4 md:mb-0 md:mr-10">
            <Progressbar progress={80} /> {/* Add CircularProgressBar component */}
          </div>
          <div className="mb-4 md:mb-0 px-10 md:px-0 md:mr-10">
            <Progressbar progress={40} /> {/* Add CircularProgressBar component */}
          </div>
          <div className="mb-4 md:mb-0">
            <Progressbar progress={32} /> {/* Add CircularProgressBar component */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-4">
        {info.slice(0, showLimitedCards ? 3 : info.length).map(({ url, id }) => (
          <div key={id} className="mb-4 md:mb-0">
            <Card url={url} />
          </div>
        ))}
      </div>
      {!showLimitedCards && (
        <div className="flex justify-center">
          <button className="hidden md:flex font-medium text-white capitalize bg-purple-600 px-4 py-2 rounded-lg">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ContestPage;
