import React, { useState } from 'react';

const Card = ({ url,  post }) => {
  const [vote, setVote] = useState(1000);
  const [thumb, setThumb] = useState(false);
  const [thumbBorderColor, setThumbBorderColor] = useState('#000000');

  const handleThumbClick = () => {
    if (thumb) {
      setVote(vote - 1);
    } else {
      setVote(vote + 1);
    }
    setThumb(!thumb);
    setThumbBorderColor(thumb ? '#000000' : '#FFFFFF');
  };

  return (
    <div className="flex justify-center p-4 relative">
      <div className="max-w-lg rounded-3xl overflow-hidden shadow-lg">
       {post &&(
        <button className="absolute font-light capitalize bg-[#BA5EEF] py-2 px-3 m-4 text-xs rounded-full">
          {post}
        </button>
       )}
        <img className="w-full" src={url} alt="Card Image" />

        <div className="px-6 py-4 bg-[#2C2C2E] ">
          <div className="flex items-center ">
            <img className="h-10 pr-20" src="assets/Logo.png" alt="Logo" />
            <h1 className=" font-medium text-xl text-white">{vote} Votes</h1>
            <button onClick={handleThumbClick} className=' bg-[#2C2C2E]  rounded-full p-2 absolute right-10 bottom-[70px]'>
              <img src="assets/Vector.png" alt="" width={30} />
              
            </button>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Card;
