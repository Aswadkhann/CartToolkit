import React from "react";

const Facts = () => {
  const list = [
    {
      id: 1,
      question: "How it Works?",
    },
    {
      id: 2,
      question: "What is Beard Contest?",
    },
    {
      id: 3,
      question: "How to participate in Beard Contest?",
    },
  ];

  return (
    <div className="bg-[#1C1C1E] text-white pb-5 pl-8 pr-8 md:pl-12 md:pr-12">
      <div className="text-6xl font-abc text-extrabold flex justify-center pt-6 pb-16">
        <h1>FAQS</h1>
      </div>
      {list.map((item, index) => (
        <div key={index} className="flex justify-center pb-1">
          <div className="relative w-full md:w-[90%] mx-auto overflow-hidden">
            <input
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              type="checkbox"
            />
            <div className="h-12 w-full  flex items-center text-lg font-bold font-abc">
              <p className="leading-6">{item.question}</p>
            </div>
            <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              &#9660;
            </div>
            <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
              <div className="py-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae aliquam officiis ipsam esse fugiat iste nihil
                  provident expedita perspiciatis maxime animi, recusandae
                  cupiditate quos natus, sed ut id voluptatibus repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facts;
