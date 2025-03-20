import React from 'react'
import websiteImage from './assets/websiteimage.png';
import MetaBadge from './assets/metaBadge.png';
import WhatsApp from './assets/whatsApp.png';
import Companies from './assets/companies.png';

const Dashboard = () => {
  return (
    <>
    <div className=' bg-gradient-to-tr from-blue-700  to-black h-[60vh] flex justify-center items-center '>
    <div className=' flex justify-between items-center w-[80%]  '>
    <div className=' w-[100rem] '>
    <div className='md:text-5xl sm:text-4xl font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-900'>Website Development</div>
    <br/>
    <div className='md:text-md text-white font-ubuntu sm:text-xs '>MSG24x7 is a dynamic digital marketing company that specializes in {<br/>} delivering innovative online solutions, including expert website  {<br/>} development services. We create high-performing, user-friendly, and  {<br/>} visually appealing websites tailored to enhance brand presence and {<br/>} drive business growth.</div>
    </div>

    <div>
    <img src={websiteImage} className='lg:h-[18rem] w-[60rem] md:h-[10rem]  ' alt='website_image'/>
    </div>
    </div>
    </div>



    <div className='flex justify-center -mt-8 h-[16vh]'>
    <div className='flex  w-[60%] justify-around items-center bg-custom-green rounded-2xl'>
    <div className='font-inria-sans text-2xl font-semibold text-white text-center'>Powered By Official <br/> WhatsApp Business API {<img src={WhatsApp} className='inline h-5 w-5'/>}</div>
    <div> <img src={MetaBadge} className='h-20 w-30'/> </div>
    </div>   
    </div>


    <div className='flex justify-center items-center mt-8 '>
    <div className='sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-500 to-orange-700 font-inria-sans md:text-5xl font-semibold'>JOIN OUR 1000+ HAPPY CUSTOMERS</div>
    </div>


    <div className='flex justify-center items-center '>
    <div className='overflow-hidden  rounded-2xl  w-[80%]'>
    <div><img src={Companies} className=' animate-marquee'/></div>
     
    </div></div>

    
    
    
    
    
    
    </>
  )
}

export default Dashboard
