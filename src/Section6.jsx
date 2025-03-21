import React from 'react'
import Banner6 from './assets/banner6.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  const [category, setCategory] = useState('IVR');
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({duration:1300});
  }, []);

  const content = {
    IVR: [
        {
            title: "Customer Support:",
            text: " Use IVR systems to efficiently route incoming calls to the appropriate departments or agents based on customer."
        },
        {
            title: "Surveys and Feedback:",
            text: "Implement IVR surveys to gather valuable customer feedback and insights by allowing callers to respond to automated prompts or questions."
        },
        {
            title: "Payment Processing",
            text: "Enable customers to make payments or transactions securely over the phone by integrating IVR systems with payment gateways, providing a convenient and automated payment option while ensuring data security and compliance."
        },
        
    ],
    Missed: [
        {
            title: "Lead Generation:",
            text: "Capture leads directly through WhatsApp by offering incentives for customers to initiate conversations or providing a click-to-chat button on your website."
        },
        {
            title: "Product Inquiry and Consultation:",
            text: "Enable customers to inquire about products or services, ask questions, and receive real-time assistance from sales representatives via WhatsApp."
        },
        {
            title: "Order Management:",
            text: "Facilitate order placement, status updates, and payment processing through WhatsApp."
        },
        {
          title: "Upselling and Cross-selling:",
          text: "Recommend complementary products or upgrades based on customer preferences and purchase history, maximizing sales opportunities and increasing average order value."
      }
    ],
    Toll: [
        {
            title: "Instant Assistance:",
            text: "Offer instant customer support and resolve queries in real-time through WhatsApp."
        },
        {
            title: "Troubleshooting and FAQs:",
            text: "Provide troubleshooting guides, FAQs, and instructional videos via WhatsApp to help customers resolve common issues on their own and reduce support inquiries."
        },
        {
            title: "Ticket Management:",
            text: "Create support tickets directly from WhatsApp conversations and track customer issues or requests through integrated ticketing systems."
        },
        {
          title: "Proactive Outreach:",
          text: "Anticipate customer needs and reach out proactively via WhatsApp to offer assistance."
      }
    ],
    Voice: [
        {
            title: "Instant Assistance:",
            text: "Offer instant customer support and resolve queries in real-time through WhatsApp."
        },
        {
            title: "Troubleshooting and FAQs:",
            text: "Provide troubleshooting guides, FAQs, and instructional videos via WhatsApp to help customers resolve common issues on their own and reduce support inquiries."
        },
        {
            title: "Ticket Management:",
            text: "Create support tickets directly from WhatsApp conversations and track customer issues or requests through integrated ticketing systems."
        },
        {
          title: "Proactive Outreach:",
          text: "Anticipate customer needs and reach out proactively via WhatsApp to offer assistance."
      }
    ]
};

  return (
    <>
    <div className='h-auto  bg-cyan-200 '>
    <div className='flex justify-center items-center '>
    {/* <div className='text-center inline-block border-2 border-orange-600 p-2 mt-3 rounded-md font-inria-sans text-2xl text-white font-bold bg-gradient-to-bl from-orange-700 via-orange-400 to-orange-700'>Cloud Telephony Solutions</div> */}
    <div class="  p-4 text-center rounded-md ">
    <h3 className="text-transparent  bg-gradient-to-br from-orange-200 via-orange-300 to-orange-100 bg-clip-text font-semibold md:text-[5rem] sm:text-[3rem] drop-shadow-lg shadow-green-900 w-fit" style={{fontFamily:"'manrope', sans-serif"}}>
                  Cloud Telephony Solution
                </h3>
    <h2 class="md:text-[2rem] sm:text-[1.5rem] font-bold tracking-wider -mt-3 text-orange-400 ">Cloud Telephony Solution</h2>
</div>
    </div>
    <div className='flex justify-center items-center mt-10'>
    <div className='flex max-sm:flex-col sm:flex-col md:flex-row justify-around items-center w-[80%] mt-5'>
    <div className='flex flex-col justify-between items-center'>
    <div className='flex w-[35rem] max-sm:w-[20rem] justify-between'>
    <button className='border-2 border-white bg-gradient-to-tr from-orange-700  to-orange-600 text-white font-ubuntu py-2  rounded-md text-sm w-[8rem] ' onClick={() => setCategory('IVR')}>IVR</button>
    <button className='border-2 border-white bg-gradient-to-tr from-orange-700  to-orange-600 text-white font-ubuntu py-2 rounded-md text-sm w-[8rem] '  onClick={() => setCategory('Missed')}>Missed Call</button>
    <button className='border-2 border-white bg-gradient-to-tr from-orange-700  to-orange-600 text-white font-ubuntu py-2 rounded-md text-sm w-[8rem]'  onClick={() => setCategory('Toll')}>Toll Free</button>
    <button className='border-2 border-white bg-gradient-to-tr from-orange-700  to-orange-600 text-white font-ubuntu py-2 rounded-md text-sm w-[8rem]'  onClick={() => setCategory('Voice')}>Voice Broadcast</button>
    </div>
    <div className='h-[22rem] w-[35rem] max-sm:w-[20rem] bg-white mt-2 mb-2 rounded-md px-5'>

   {content[category].map((item, index) => (
                    <div key={index}>
                        <div className='ml-2 mt-3 font-semibold font-outfit text-sm text-orange-600'>{item.title}</div>
                        <div className='ml-2 mt-1 font-extralight font-inter text-xs'>{item.text}</div>
                    </div>
                ))}
    </div>
    <div><button className='bg-orange-700 text-white font-inter p-1 px-2 rounded-md border-b-4 border-r-4 border-orange-400'>Chat on WhatsApp</button></div>
    </div>
    <div><img src={Banner6} className='w-[25rem] h-[25rem]' data-aos="zoom-in"/></div>
    </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Section2
