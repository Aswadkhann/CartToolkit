import React from 'react'
import { useState } from 'react'
import {HiThumbUp} from 'react-icons/hi'
const ShopCard = ({url , id,post}) => {
  const [vote, setVote] = useState(1000)
  const [thumb,setThumb] = useState(false)

  return (
    <>
    <div className='flex justify-around pt-10 relative'>

      <div key={id} class="max-w-sm rounded overflow-hidden shadow-lg pr-5 ">
      <button className='absolute font-light capitalize bg-[#BA5EEF] py-3 px-3 m-4 text-xs  rounded-full'></button>
      <img class="w-full" src='assets/shopcard1.png' alt="Card Image"/>
      
      <div class="px-6 py-4 bg-[#2C2C2E]">
        <div class="font-bold text-xl mb-2 flex justify-between">
          <img className='' src="assets/Logo.png" alt="" width={50} />
          <h1 className=' font-light pt-3'>Votes</h1>

        </div>
        
      </div>

    </div>

    </div>
</>

  )
}

export default ShopCard