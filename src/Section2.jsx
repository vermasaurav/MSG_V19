import React from 'react'
import BannerManisha from './assets/bannerManisha.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  const [category, setCategory] = useState('Marketing');
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({duration:1300});
  }, []);

  const content = {
    Marketing: [
        {
            title: "Targeted Messaging :",
            text: "Use WhatsApp capabilities to send personalized messages to specific customer segments, promoting new products, services, or special offers."
        },
        {
            title: "Interactive Campaigns:",
            text: "Engage customers with interactive campaigns such as polls, quizzes, or surveys, allowing them to actively participate and providing valuable feedback."
        },
        {
            title: "Customer Engagement:",
            text: "Share rich media content like images, videos, or product catalogs to showcase your offers."
        },
        {
            title: "Promotional Updates:",
            text: "Send timely promotional updates and reminders about upcoming sales events, product launches, or exclusive discounts to keep customers informed and drive conversions."
        }
    ],
    Sales: [
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
    Support: [
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
    <div className='h-auto  bg-gradient-to-br from-green-500 via-green-300 to-orange-300 '>
    <div className='flex justify-center items-center '>
    {/* <div className='text-center inline-block bg-gradient-to-br from-green-900 via-green-600 to-green-900 p-2 mt-3 rounded-lg font-inria-sans text-2xl text-white font-bold border-2 border-green-700  w-[20rem] '>WhatsApp Business API</div> */}
    <div class="  p-4 text-center rounded-md">
    <h3 className="text-transparent  bg-gradient-to-br from-green-200 via-green-300 to-green-100 bg-clip-text font-semibold md:text-[5rem] sm:text-[3rem] drop-shadow-lg shadow-green-900 w-fit " style={{fontFamily:"'manrope', sans-serif"}}>
                  WhatsApp Business API
                </h3>
    <h2 class="md:text-[2rem] sm:text-[1.5rem] font-bold tracking-wider -mt-3 text-white ">One Stop Solution</h2>
</div>

    
    </div>
    <div className='flex justify-center items-center'>
    <div className='flex max-sm:flex-col sm:flex-col md:flex-row justify-around items-center w-[80%]  '>
    <div className='flex flex-col justify-between items-center '>
    <div className='flex w-[60%] justify-around '>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-xl text-sm border-2 border-white w-[8rem]' onClick={() => setCategory('Marketing')}>Marketing</button>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-xl text-sm border-2 border-white w-[8rem]'  onClick={() => setCategory('Sales')}>Sales</button>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-xl text-sm border-2 border-white w-[8rem]'  onClick={() => setCategory('Support')}>Support</button>
    </div>
    <div className='h-auto w-[60%]  bg-white mt-2 mb-2 rounded-md px-5'>

   {content[category].map((item, index) => (
                    <div key={index}>
                        <div className='ml-2 mt-3 font-semibold font-outfit text-sm text-green-700'>{item.title}</div>
                        <div className='ml-2 mt-1 font-extralight font-inter text-xs'>{item.text}</div>
                    </div>
                ))}
    </div>
    <div><button className='bg-green-800 text-white font-inter p-1 px-2 rounded-md border-b-4 border-r-4 border-green-500'>Chat on WhatsApp</button></div>
    </div>
    <div><img src={BannerManisha} className='w-[25rem] h-[25rem] ' data-aos="zoom-in"/></div>
    </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Section2
