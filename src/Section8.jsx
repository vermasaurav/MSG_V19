import React from 'react'
import Banner7 from './assets/banner7.png';
import ImageMsg from './assets/ImageMsg.png';
const Section8 = () => {
  return (
   <div className="md:h-[55vh] sm:h-[45rem] w-full bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url(${Banner7})` }}>

    <div className='w-[80%] flex justify-between items-center '>
    <div className='flex flex-col justify-between items-center'>
    <div>
    <h2 className='font-outfit text-3xl text-white'>Get Started with</h2>
    <h2 className='font-outfit text-3xl text-white mt-2'>MSG24x7 Services Today</h2>
    <div className='flex mt-2'>
        <div className='text-white mr-2 font-light font-ubuntu text-sm'>Business Messaging</div>
        <div className='text-white mr-2 font-light font-ubuntu text-sm'>Business Messaging</div>
        <div className='text-white mr-2 font-light font-ubuntu text-sm'>Business Messaging</div>
    </div>
    </div>

   
    </div>


    <div>
        <img src={ImageMsg} className='w-[20rem] h-[20rem]' alt="image" />
    </div>

    </div>


   </div>
  )
}

export default Section8