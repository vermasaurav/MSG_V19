import React from 'react'
import Banner5 from './assets/banner5.png';
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
            title: "Appointment Reminders :",
            text: "Send SMS reminders to clients or patients to reduce no-show rates for appointments, consultations, or reservations."
        },
        {
            title: "Order Updates:",
            text: "Keep customers informed about the status of their orders with SMS notifications for order confirmation, shipment tracking, and delivery alerts."
        },
        {
            title: "Marketing Campaigns:",
            text: " Reach out to a wide audience with promotional SMS messages featuring special offers, discounts, or announcements to drive sales and engagement."
        },
        {
            title: "Two-Factor Authentication (2FA):",
            text: " Enhance security for online accounts and transactions by implementing SMS-based 2FA to verify user identities and prevent unauthorized access."
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
    <div className='h-auto my-2 bg-white  '>
    <div className='flex justify-center items-center'>
    {/* <div className='text-center inline-block bg-blue-600 p-2 mt-3 rounded-md font-inria-sans text-2xl text-white font-bold px-15 border-2 border-blue-400'>PR Services</div> */}
    <div class="  p-4 text-center rounded-md">
    <h3 className="text-transparent  bg-gradient-to-br from-blue-200 via-blue-300 to-blue-100 bg-clip-text font-semibold md:text-[5rem] sm:text-[3rem] drop-shadow-lg shadow-green-900 w-fit" style={{fontFamily:"'manrope', sans-serif"}}>
                  PR Services
                </h3>
    <h2 class="md:text-[2rem] sm:text-[1.5rem] font-bold tracking-wider -mt-3 text-blue-400 ">PR Services</h2>
</div>
    </div>
    <div className='flex justify-center items-center'>
    <div className='flex sm:flex-col md:flex-row justify-around items-center w-[80%] mt-5'>
    <div className='flex flex-col justify-between items-center'>
    {/* <div className='flex w-[20rem] justify-between'>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-md text-sm border-2 border-white' onClick={() => setCategory('Marketing')}>Marketing</button>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-md text-sm border-2 border-white'  onClick={() => setCategory('Sales')}>Sales</button>
    <button className='bg-gradient-to-tr from-indigo-700  to-blue-600 text-white font-inter p-1 px-2 rounded-md text-sm border-2 border-white'  onClick={() => setCategory('Support')}>Support</button>
    </div> */}
    <div className='h-[22rem] w-[25rem] bg-white mt-2 mb-2 rounded-md px-1 border-2 border-blue-400'>

   {content[category].map((item, index) => (
                    <div key={index}>
                        <div className='ml-2 mt-3 font-semibold font-outfit text-sm text-blue-400'>{item.title}</div>
                        <div className='ml-2 mt-1 font-extralight font-inter text-xs'>{item.text}</div>
                    </div>
                ))}
    </div>
    <div><button className='bg-blue-700 text-white font-inria-sans p-1 px-10 rounded-md border-b-4 border-r-4 border-blue-400'>Sign Up for free</button></div>
    </div>
    <div><img src={Banner5} className='w-[25rem] h-[25rem]' data-aos="zoom-in"/></div>
    </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Section2
