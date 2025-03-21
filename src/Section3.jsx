import React from 'react'
import BackgroundImage1 from './assets/background1.png';
import Banner2 from './assets/banner2.png';
import { useEffect } from 'react';
import AOS from 'aos';
// import 'aos/dist/aos.css';

const Section3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({duration:1300});
      }, []);
  return (
    <div className="w-full sm:h-[50rem] max-sm:h-[50rem] bg-cover bg-center bg-no-repeat border-2 border-green-600" style={{ backgroundImage: `url(${BackgroundImage1})` }}>

    <div className='w-4/5 mx-auto flex justify-between items-center h-screen max-sm:flex-col sm:flex-col md:flex-row border-2 border-black'>

    <div className=' md:w-[30rem] max-sm:h-auto bg-white p-5 rounded-2xl sm:mt-5 md:mt-0 border-2 border-black'>
    <div className='font-bold text-4xl font-outfit '>META For Your Business</div>
    <div className='font-bold mt-3 font-poppins'>MSG24x7 is an Official Meta Business Partner (BSP)</div>
    <div className='font-semibold mt-3 font-ubuntu'>MSG24x7 Communications provides you with solutions which you can use to build active engagement with your customers on a daily basis . </div>
    <div className='font-semibold mt-3 font-outfit'> <span className='text-green-600'>Best WhatsApp API Provider in India</span> </div>
    <div></div>
    <div></div>

    </div>

    <div className='backdrop-blur-sm flex justify-center items-center sm:mt-15 md:mt-0'>

     
    <img src={Banner2} alt='banner2.png' className='w-[25rem] h-[25rem] ' data-aos="zoom-in"/>



    </div>



    </div>


    </div>
    
  )
}

export default Section3