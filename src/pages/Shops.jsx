import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { BiSearch } from "react-icons/bi";
import { HiAdjustments } from "react-icons/hi";
import { useState,useEffect } from "react";


const Shops = ({ data, heading, para, mainheading, search }) => {
  
  const [showModal, setShowModal] = React.useState(false);
  const [value, setValue] = useState(0);
  const cardsPerLoad = 4;
  const [displayedCards, setDisplayedCards] = useState(data.slice(0, 6));
  const handleCancel = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const initialDisplayCount = 6;
    setDisplayedCards(data.slice(0, initialDisplayCount));
  }, [data]);
  const handleLoadMore = () => {
    const currentDisplayCount = displayedCards.length;
    const newDisplayedCards = data.slice(0, currentDisplayCount + cardsPerLoad);
    setDisplayedCards(newDisplayedCards);
  };
  const handleModalClose = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };
  const handleModalOpen = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 640 }); // Define the maximum width for small screens

  // const displayedCards = isSmallScreen ? data.slice(0, 1) : data; // Limit the number of cards to 1 on small screens

  return (
    <div
      className={`h-auto md:h-[80vh] lg:h-auto bg-${
        showModal ? "black" : "light"
      } py-4 px-8 md:px-12 bg-[#1C1C1E]`}
    >
      {mainheading && (
        <div className="flex justify-center md:py-6">
          <h1 className="text-4xl md:mb-4 font-extrabold text-white font-abc">
            {heading}
          </h1>
        </div>
      )}
      {search && (
        <>
          <div className="sm:flex  justify-end">
            <div className=" pr-0 sm:pr-10">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-2 border-[#BA5EEF] border-opacity-50 rounded font-thin pl-8 pr-4 py-2 bg-[#1E1E1C] text-white placeholder-[#46464a] focus:outline-none focus:border-purple-500 focus:ring-purple-500 w-[100%] sm:w-auto"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <BiSearch color="#3C3C3E" size={25} />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-[#BA5EEF] flex border-opacity-50 justify-between rounded px-5 py-2 mt-4 sm:mt-0  w-[100%] sm:w-[150px] font-thin text-sm bg-1E1E1C text-[#46464a] items-center focus:outline-none focus:border-purple-500 focus:ring-purple-500"
            >
              <div>Add Filter</div>
              <div className="  ">
                <HiAdjustments color="#46464a" size={25} />
              </div>
            </button>
            {showModal ? (
        <>
          {/* Your modal content */}
          <div className="justify-center items-center flex fixed inset-0 z-50 focus:outline-none">
            {/* Modal container */}
            <div className="relative w-[80%] my-6 mx-auto">
              {/* Modal content */}
              <div className="rounded-lg shadow-lg bg-[#1C1C1E] flex justify-between w-full outline-none focus:outline-none p-4">
                {/* Location section */}
                <div className="flex flex-col">
                  <h2 className="font-semibold text-white font-abc py-3">
                    Location
                  </h2>
                  {/* Search input */}
                  <div className="flex">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="border-2 text-sm border-gray-300 border-opacity-50 rounded font-thin pl-8 pr-4 py-2 bg-[#1E1E1C] text-white placeholder-gray-400 focus:outline-none w-[100%] sm:w-auto"
                      />
                      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                        <BiSearch color="gray" size={25} />
                      </div>
                    </div>
                    <button className="border-2 border-gray-300 flex border-opacity-50 justify-between rounded ml-[120px] px-3 py-1 sm:mt-0 sm:w-[150px] font-thin text-xs bg-1E1E1C text-gray-400 items-center focus:outline-none">
                      <div>Current Location</div>
                      <div className="">
                        <HiAdjustments color="gray" size={25} />
                      </div>
                    </button>
                  </div>
                  {/* Map image */}
                  <div className="pt-4">
                    <img src="assets/google.png" className="w-[90%]" alt="" />
                  </div>
                </div>
                {/* Filters section */}
                <div className="">
                  {/* Distance filter */}
                  <div className="border border-gray-500 py-5">
                    <p className="p-3 text-white py-5">Distance</p>
                    <div className="flex items-center px-12">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={handleChange}
                        className="w-full h-[2px] bg-purple-400 rounded-full appearance-none focus:outline-none"
                      />
                      <div className="w-20 h-8 rounded-full flex items-center justify-center text-white font-medium ml-3">
                        {value}
                      </div>
                    </div>
                  </div>
                  {/* Price range filter */}
                  <div className="border border-gray-500 mt-5 py-5">
                    <p className="p-3 text-white py-5">Set Price Range</p>
                    <div className="flex items-center px-12">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={handleChange}
                        className="w-full h-[2px] bg-purple-400 rounded-full appearance-none focus:outline-none"
                      />
                      <div className="w-20 h-8 rounded-full flex items-center justify-center text-white font-medium ml-3">
                        {value}
                      </div>
                    </div>
                  </div>
                  {/* Languages filter */}
                  <div className="border border-gray-500 py-5 mt-5">
                    <p className="p-3 text-white py-5">Languages</p>
                    <div className="p-3">
                      <button className="mb-3 bg-none hover:bg-purple-500 border text-white hover:text-whtie border-purple-500 rounded-md px-3 py-2">
                        English
                      </button>
                      <button className="mx-3 bg-none hover:bg-purple-500 border text-white hover:text-whtie border-purple-500 rounded-md px-3 py-2">
                        English
                      </button>
                      <button className="bg-none hover:bg-purple-500 border text-white hover:text-whtie border-purple-500 rounded-md px-3 py-2">
                        English
                      </button>
                      <button className="mx-3 bg-none hover:bg-purple-500 border text-white hover:text-whtie border-purple-500 rounded-md px-3 py-2">
                        English
                      </button>
                      <button className="bg-none hover:bg-purple-500 border text-white hover:text-whtie border-purple-500 rounded-md px-3 py-2">
                        English
                      </button>
                    </div>
                  </div>
                  {/* Button section */}
                  <div className="pt-4 flex float-right">
                    <button className="mb-3 bg-none bg-[#1C1C1E] border text-white hover:text-whtie border-white rounded-md px-3 py-2" onClick={handleCancel}>
                      Cancel
                    </button>
                    <button className="ml-3 mb-3 bg-none bg-purple-500 hover:bg-purple-500 border-none border text-white hover:text-whtie border-white rounded-md px-3 py-2 " >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal overlay */}
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          </div>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="rounded-lg items-center col-span-2 md:pl-4 sm:pl-10 md:pt-10">
          <h2 className="font-bold mb-2 text-lg sm:text-4xl hidden md:flex md:text-5xl leading-[80px] text-white font-abc">
            {heading}
          </h2>
          {para && (
            <p className=" text-sm font-extralight py-5 md:pt-7 text-[#D9D9D9]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vero fugit necessitatibus, aperiam praesentium, iusto,
              totam consequatur excepturi enim recusandae ipsum itaque
              blanditiis! Ea enim reprehenderit consequatur est maiores
              nesciunt!
            </p>
          )}
        </div>

        {displayedCards.map((card) => (
          <div className="rounded-xl w-full sm:w-auto pt-4 " key={card.id}>
            <img
              src={card.image}
              alt=""
              className="rounded-t-xl h-[175px]  w-full object-cover"
            />
            <div className="bg-[#2C2C2E] p-2 rounded-b-xl">
              <h4 className="font-extrabold text-white font-abc text-sm sm:text-base">
                Lotion
              </h4>
              <p className="text-[#5e6363] py-1 text-xs sm:text-sm">
                {card.description.slice(0, 50)}
              </p>
              <div className="flex justify-between">
                <h3 className="text-xl font-extrabold text-white">{card.price}$</h3>
                <span className="border rounded-full border-white bg-white">
                  <HiChevronRight color="black" size={25} />
                </span>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      {displayedCards.length < data.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Shops;
