import React from 'react'
import NewsImage from './assets/newspack.png';
import Yug from './assets/yugpatrika.png';

const News = () => {
  return (
    <div className='h-auto my-5'>
        <div className='flex flex-col  justify-center items-center space-y-5'>
        <div className='font-bold font-outfit text-red-500 text-4xl mt-5'>
        Recent News Coverage
        </div>

        <div className='text-black font-ubuntu font-semibold w-[80%] text-center'>
        We are excited to share that some recent news outlets have published articles highlighting the innovative and reliable WhatsApp Business API (WABA)  service provided by msg24x7.
        </div>
        </div>



        <div className=' h-auto items-center flex  justify-center my-5'>

       <div className='w-[80%] h-auto  flex sm:flex-col md:flex-row justify-around items-center'>

    <div>
        <img src={NewsImage} className='w-[20rem] h-[15rem] '/>
    </div>
    <div className='flex mt-5 bg-gray-400 w-[30rem] h-[12rem] justify-around items-center rounded-md'>
    <div><img src={Yug} className='w-30 h-30'/></div>
    <div className='bg-white w-[20rem] h-[8rem] p-1 rounded-md'>
        <h2 className='font-bold font-outfit'>Yugpatrika.com</h2>
        <div className='font-semibold text-sm mt-3'>
        Yugpatrika News is today's most watched and the most credible respected news media in India. It covers the news around the india in many categories.
        </div>
    </div>
    </div>

       </div>

        </div>


    </div>
  )
}

export default News