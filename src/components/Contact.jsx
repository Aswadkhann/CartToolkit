import React, { useState } from "react";
import { VscPass, VscPassFilled } from "react-icons/vsc";

const Contact = () => {
  const [first, setFirst] = useState(false);

  return (
    <div className="bg-black text-white h-[85vh] md:h-[75vh] w-screen pl-8 pr-8 md:pl-12 md:pr-12">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-8">Contact Us</h1>
      </div>
      <div className="md:px-10   pt-12">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name (Required)"
              className="bg-[#2C2C2E] col-span-2 md:col-span-1 focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-2 px-2 border"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name (Required)"
              className="bg-[#2C2C2E] col-span-2 md:col-span-1 focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-2 px-2 border"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email (Required)"
              className="bg-[#2C2C2E] col-span-2 md:col-span-1 focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-2 px-2 border"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone Number (Required)"
              className="bg-[#2C2C2E] col-span-2 md:col-span-1 focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-2 px-2 border"
            />
            <textarea
              name=""
              id=""
              cols="100"
              rows="7"
              placeholder="Message (Required)"
              className="bg-[#2C2C2E] col-span-2 focus:border-none focus:outline-none font-abc font-normal text-xs border-none rounded-md py-2 px-2 border"
            ></textarea>
          </div>
          <div className="pt-4 text-sm flex items-center" onClick={() => setFirst(!first)}>
            {first ? (
              <VscPass className="inline" size={25} />
            ) : (
              <VscPassFilled className="inline" size={25} />
            )}
            <span className="ml-3">
              By submitting, you accept our{" "}
              <span className="text-purple-500">Terms and Conditions</span>.
            </span>
          </div>
          <button
            type="submit"
            className="flex justify-center mx-auto w-[170px] font-medium text-white capitalize bg-purple-600 py-3 mt-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
