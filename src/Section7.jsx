import React from 'react'
import Typingeffect from './TypingEffect';

const Section7 = () => {
  const texts = ["WhatsApp Messages", "OTP"];

    const jsonData = {
        apiKey: "your-api-key",
        campaignName: "your-campaign",
        destination: "your-destination",
        userName: "your-username",
        source: "your-source",
        media: {
          url: "your-media-url",
          filename: "your-filename"
        },
        templateParams: ["string"]
      };


  return (
    <div className='flex bg-gradient-to-br from-blue-900 via-blue-800 to-black h-[60vh] justify-center items-center'>
        <div className=' w-[80%] flex justify-around'>
        <div className=' w-[25rem] mt-9'>
        <div className=''>
            <div className='font-outfit md:text-3xl sm:text-xl text-white'>Send Your First</div>
            {/* <div className='font-outfit text-3xl text-green-600'>WhatsApp Messages</div> */}
            <Typingeffect texts={texts} speed={100} />
            <div className='font-outfit md:text-3xl sm:text-xl text-white mt-2'>in a matter of minutes</div>
        </div>
        <div className='mt-5 text-white font-semibold md:text-xl sm:text-xs '>Register now for a MSG24x7 account to get started. Send your first text message, OTP Code, or WhatsApp messages in minutes and when you're ready to upgrade, contact our expert.</div>

        </div>


        <div className='flex flex-col justify-start items-center'>
        <div className='flex justify-between items-center  w-[15rem]'>
            <button className='text-white font-inter bg-blue-950 border-2 border-white p-1 rounded-md px-2'>WhatsApp</button>
            <button className='text-white font-inter bg-blue-950 border-2 border-white p-1 rounded-md px-2'>SMS</button>
        </div>
        <div className='bg-black sm:w-[15rem] md:w-[20rem] h-[15rem]  rounded-xl mt-2 border-2 border-white'>
        <div>
               <pre className="text-xs text-white mt-1">{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
        </div>

        </div>
        </div>



    </div>
  )
}

export default Section7