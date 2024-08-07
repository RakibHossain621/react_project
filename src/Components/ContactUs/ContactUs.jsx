import React from 'react'
import PhoneSvg from './PhoneSvg'
import MessageSvg from './MessageSvg'
import LocationSvg from './LocationSvg'
import FacebookSvg from './FacebookSvg'
const ContactUs = () => {
  return (
    <div className='container'>
      <div className='text-center'>
       <h1 className='text-[40px] font-bold text-[#2947A9] '>Contact Us</h1>
      </div> 
      <div className="contact_wrapper">
        <div className="contact_left lg:w-[50%] w-[100%] ">
          <h1 className='text-[32px] font-bold text-[#211F1E]'>Contract Details</h1>
          <p className='text-[18px] font-semibold	text-[#211F1E] '>Please fill out and submit the contact form below and we will get back to you as soon as we can.</p>
        </div>
          <div className='flex gap-1'>
              <PhoneSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>0111 756 4973</h1>
              </div>
          <div className='flex gap-1'>
              <PhoneSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>0111 756 4973</h1>
              </div>
          <div className='flex gap-1'>
              <MessageSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>info@tho.com</h1>
              </div>
          <div className='flex gap-1'>
              <LocationSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>Black Lake  RoadKissimmee, 
               FL 34747US</h1>
              </div>
          <div className='flex gap-1'>
              <FacebookSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>Follow Us</h1>
              </div>
        <div className="contact_right lg:w-[50%] w-[100%]">
            <from
            
            />
        </div>
      </div>
    </div>
  )
}
export default ContactUs