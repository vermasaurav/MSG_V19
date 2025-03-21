import React from 'react'
import Banner7 from './assets/banner7.png';
import ImageMsg from './assets/ImageMsg.png';
const Section8 = () => {
  return (
   <div className="md:h-auto sm:h-[100vh]  w-full bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url(${Banner7})` }}>

    <div className='w-[80%] flex sm:flex-col md:flex-row  h-[90vh] justify-between items-center '>
    <div className='flex flex-col justify-between items-center'>
    <div>
    <h2 className='font-outfit text-3xl text-white sm:text-center md:text-left'>Get Started with</h2>
    <h2 className='font-outfit text-3xl text-white mt-2 sm:text-center md:text-left'>MSG24x7 Services Today</h2>
    <div className='flex mt-2'>
        <div className='text-white mr-2 font-light font-ubuntu text-sm sm:text-center md:text-left'>Business Messaging</div>
        <div className='text-white mr-2 font-light font-ubuntu text-sm sm:text-center md:text-left'>Business Messaging</div>
        <div className='text-white mr-2 font-light font-ubuntu text-sm sm:text-center md:text-left'>Business Messaging</div>
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