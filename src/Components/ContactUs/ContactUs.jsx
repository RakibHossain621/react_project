import React from 'react'
import PhoneSvg from './PhoneSvg'
import MessageSvg from './MessageSvg'
import LocationSvg from './LocationSvg'
import FacebookSvg from './FacebookSvg'
const ContactUs = () => {
  return (
    <div className='container px-[32px] lg:px-0'>
      <div className='text-center'>
       <h1 className='text-[40px] font-bold text-[#2947A9] '>Contact Us</h1>
      </div> 
      <div className="contact_wrapper lg:flex gap-8 mt-[114px]">
        <div className="contact_left lg:w-[50%] w-[100%] flex justify-center items-center md:flex-col md:flex md:justify-center md:items-center flex-col lg:items-start lg:justify-start  ">
          <h1 className='text-[32px] font-bold text-[#211F1E] mt-[-2em]'>Contract Details</h1>
          <p className='text-[18px] font-semibold	text-[#211F1E] mt-[32px] max-w-[460px] '>Please fill out and submit the contact form below and we will get back to you as soon as we can.</p>
        
          <div className='flex gap-1 mt-[32px] items-center'>
              <PhoneSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>0111 756 4973</h1>
              </div>
          <div className='flex gap-1 items-center mt-[24px]'>
              <PhoneSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>0111 756 4973</h1>
              </div>
          <div className='flex gap-1 items-center mt-[24px]'>
              <MessageSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>info@tho.com</h1>
              </div>
          <div className='flex gap-1 mt-[24px] pl-[88px] lg:pl-0'>
              <LocationSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>Black Lake  RoadKissimmee, <br /> 
               FL 34747US</h1>
              </div>
          <div className='flex gap-1 items-center mt-[24px] mb-8 lg:mb-0'>
              <FacebookSvg/>
               <h1 className='text-[24.366px] font-medium	text-[#211F1E]'>Follow Us</h1>
              </div>
              </div>
        <div className="contact_right lg:w-[50%] w-[100%]">
        <form className='from'>
                <div className='inputfiled grid grid-cols-[1fr_1fr]'>
                <div className='input_label'>
                <label>First Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className='input_label'>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="contractNumber"
                      placeholder="Your name"

                    />
                  </div>

                  <div className="input_label">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"

                    />
                  </div>
                  <div className="input_label">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="Phone"
                      placeholder="Your Phone Number"

                    />
                  </div>

                </div>
                <textarea
                  name="message"
                  placeholder="Type your message"
                  rows={6}
                />
                <div className="herobtn">
                  <button className='hero_btn'>SEND</button>
                </div>
              </form>
            
          
        </div>
      </div>
    </div>
  )
}
export default ContactUs