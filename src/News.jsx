// import React from 'react'
// import NewsImage from './assets/newspack.png';
// import Yug from './assets/yugpatrika.png';

// const News = () => {
//   return (
//     <div className='h-auto my-5'>
//         <div className='flex flex-col  justify-center items-center space-y-5'>
//         <div className='font-bold font-outfit text-red-500 text-4xl mt-5'>
//         Recent News Coverage
//         </div>

//         <div className='text-black font-ubuntu font-semibold w-[80%] text-center'>
//         We are excited to share that some recent news outlets have published articles highlighting the innovative and reliable WhatsApp Business API (WABA)  service provided by msg24x7.
//         </div>
//         </div>



//         <div className=' h-auto items-center flex  justify-center my-5'>

//        <div className='w-[80%] h-auto  flex sm:flex-col md:flex-row justify-around items-center'>

//     <div>
//         <img src={NewsImage} className='w-[20rem] h-[15rem] '/>
//     </div>
//     <div className='flex mt-5 bg-gray-400 w-[30rem] h-[12rem] justify-around items-center rounded-md'>
//     <div><img src={Yug} className='w-30 h-30'/></div>
//     <div className='bg-white w-[20rem] h-[8rem] p-1 rounded-md'>
//         <h2 className='font-bold font-outfit'>Yugpatrika.com</h2>
//         <div className='font-semibold text-sm mt-3'>
//         Yugpatrika News is today's most watched and the most credible respected news media in India. It covers the news around the india in many categories.
//         </div>
//     </div>
//     </div>

//        </div>

//         </div>


//     </div>
//   )
// }

// export default News



import React from 'react';
import NewsImage from './assets/newspack.png';
import Yug from './assets/yugpatrika.png';

const News = () => {
  return (
    <div className="h-auto my-5">
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="font-bold font-outfit text-red-500 text-2xl sm:text-4xl mt-5 text-center">
          Recent News Coverage
        </div>

        <div className="text-black font-ubuntu font-semibold w-[90%] sm:w-[80%] text-center text-sm sm:text-base">
          We are excited to share that some recent news outlets have published articles highlighting the innovative and reliable WhatsApp Business API (WABA) service provided by msg24x7.
        </div>
      </div>

      <div className="h-auto flex justify-center my-5">
        <div className="w-[90%] sm:w-[80%] h-auto flex flex-col md:flex-row justify-around items-center">
          <div className="mb-5 md:mb-0">
            <img src={NewsImage} className="w-full max-w-[20rem] h-auto" alt="news" />
          </div>

          <div className="flex flex-col sm:flex-row bg-gray-400 w-full sm:w-[30rem] h-auto p-3 justify-center items-center rounded-md">
            <div className="mb-3 sm:mb-0">
              <img src={Yug} className="w-24 h-24 sm:w-30 sm:h-30" alt="yugpatrika" />
            </div>
            <div className="bg-white w-full sm:w-[20rem] h-auto p-3 rounded-md text-center sm:text-left">
              <h2 className="font-bold font-outfit text-lg sm:text-xl">Yugpatrika.com</h2>
              <div className="font-semibold text-xs sm:text-sm mt-2">
                Yugpatrika News is today's most watched and the most credible respected news media in India. It covers the news around India in many categories.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
