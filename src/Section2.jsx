import React from 'react'
import BannerManisha from './assets/bannerManisha.png';

const Section2 = () => {
  return (
    <>
    <div className='h-[80vh] bg-gradient-to-br from-green-500 via-green-300 to-orange-300'>
    <div className='flex justify-center items-center'>
    <div className='text-center inline-block bg-green-700 p-2 mt-3 rounded-md font-inter text-white font-bold'>WhatsApp Business API</div>
    </div>
    <div className='flex justify-center items-center'>
    <div className='flex justify-between items-center w-[80%] mt-5'>
    <div className='flex flex-col justify-between items-center'>
    <div className='flex w-[20rem] justify-between'>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-md'>Marketing</button>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-md'>Sales</button>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-md'>Support</button>
    </div>
    <div className='h-[22rem] w-[20rem] bg-white mt-2 mb-2 rounded-md'>
    <div>
    <div>Text Messaging</div>
    <div>In the Context of this</div>
    <div>Text Messaging</div>
    <div>In the Context of this</div>
    <div>Text Messaging</div>
    <div>In the Context of this</div>
    <div>Text Messaging</div>
    <div>In the Context of this</div>
    
    
    </div>
    </div>
    <div><button className='bg-green-700 text-white font-inter p-1 px-2 rounded-md'>Chat on WhatsApp</button></div>
    </div>
    <div><img src={BannerManisha} className='w-[25rem] h-[25rem]'/></div>
    </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Section2
