import React from "react";

const Footer = () => {
  const pages = [
    {
      id: 1,
      pgname: "About",
    },
    {
      id: 2,
      pgname: "Beard Contest",
    },
    {
      id: 3,
      pgname: "Beard Shops",
    },
    {
      id: 4,
      pgname: "Online Shop",
    },
    {
      id: 5,
      pgname: "Contact Us",
    },
  ];
  const legal = [
    {
      id: 1,
      lgpage: "Terms and Condition",
    },
    {
      id: 2,
      lgpage: "Privacy policy",
    },
  ];
  return (
    <footer className="bg-[#1C1C1E] pl-8 pr-8 md:pl-12 md:pr-12 ">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/4">
            <img src="assets/Logo.png" alt="logo" />
            <h1 className="py-4 text-white">Beard Friend</h1>
            <p className="text-justify text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              tempora sunt molestiae ab totam perspiciatis consequatur repellat
              soluta laudantium porro.
            </p>
          </div>
          <div className="flex flex-row md:flex-row justify-around md:w-1/2 mt-6 md:mt-0">
            <div className="pr-6 md:pr-0 pb-4">
              <div className="pb-4 text-white ">Pages</div>
              <ul>
                {pages.map(({ id, pgname }) => (
                  <li
                    key={id}
                    className="text-sm cursor-pointer font-medium text-purple-500 capitalize hover:scale-105 duration-200 leading-7"
                  >
                    {pgname}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="pb-4"><span className="text-white">Legal</span></div>
              <ul>
                {legal.map(({ id, lgpage }) => (
                  <li
                    key={id}
                    className="text-sm cursor-pointer font-medium text-purple-500 capitalize hover:scale-105 duration-200 leading-7"
                  >
                    {lgpage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <h1 className="text-white">Subscribe to Our Newsletter</h1>
              <div className=" gap-4 mt-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Full Name"
                  className="bg-[#2C2C2E] mb-4 w-full focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-3 px-2"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="bg-[#2C2C2E] w-full focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-3 px-2"
                />
              </div>
              <p className="pt-4 text-sm text-justify text-white">
                By subscribing to our newsletter, your data will be processed
                according to our{" "}
                <span className="text-purple-500">Privacy Policy</span>.
              </p>
              <button
                type="submit"
                className="flex justify-center mx-auto w-[120px] font-medium text-white capitalize bg-purple-600 py-2 mt-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="text-white flex pt-12 justify-center text-sm">
          <h6>All rights reserved 2023 © Bartfreunde</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
