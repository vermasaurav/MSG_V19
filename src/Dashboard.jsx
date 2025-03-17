import React from 'react'
import websiteImage from './assets/websiteimage.png'

const Dashboard = () => {
  return (
    <>
    <div className=' bg-gradient-to-tr from-blue-700  to-black h-[60vh] flex justify-center items-center'>
    <div className=' flex justify-between items-center w-[80%]'>
    <div className=' w-[100rem] '>
    <div className='text-5xl  font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-900'>Website Development</div>
    <br/>
    <div className='text-md text-white font-ubuntu'>MSG24x7 is a dynamic digital marketing company that specializes in {<br/>} delivering innovative online solutions, including expert website  {<br/>} development services. We create high-performing, user-friendly, and  {<br/>} visually appealing websites tailored to enhance brand presence and {<br/>} drive business growth.</div>
    </div>

    <div>
    <img src={websiteImage} className='h-[20rem] w-[60rem]' alt='website_image'/>
    </div>
    </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Dashboard
