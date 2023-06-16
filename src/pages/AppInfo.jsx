import React from 'react';

const AppInfo = () => {
  return (
    <div className="bg-[#1C1C1E] text-white  h-[100vh] md:h-[110vh]  pl-8 pr-8 md:px-20">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-8">Download Our Mobile Application</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-8">
        <div className="mb-8 md:mb-0">
          <img className="" src="assets/app.png" alt="" />
        </div>
        <div className=" ">
          <img src="assets/iphone.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
