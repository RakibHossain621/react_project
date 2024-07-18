import React from 'react'
import './About.css';
import AboutContant from './AboutContant';

const About = () => {
  return (
    <section>
      <div className='about'>
        <h1 className="bg-[#eeeeddcc] h-[100px] text-center   about_heading">
          About US
        </h1>
        <div className='bg-[#ffffffe6]'>
          <div className='sec_padding'>
            <div className=" container">
              <div className="about_wrapper flex">
                <div className="about_left flex-[1.5] bg-[#2947A9]">
                  <div className="about_left_heding">
                    <h1>Over 30 years experience</h1>
                    <p>Over 30 years eDirect Roofing & Building Ltd offer a professional, friendly and reliable service and are specialists in conservatory tiled roofing, roof replacements, Firestone rubber roofing Conservatory conversions and rebuilds, thermally efficient replacement glazing, lean-too/carports and other home improvements. All designed and tested to withstand the harshest of weather conditions. We have completed 1000's of jobs in the Northwest and throughout the UK, with 100% customer satisfaction. All our work is insured and guaranteed. Our craftsmen are qualified, experienced and professional joiners, electricians, plumbers and finishers with over 40 years experience.</p>
                  </div>
                </div>
                <div className="about_right flex-1">
                  <img src="about_hero.png" />
                </div>
              </div>
              <div className="about_wrapper flex gap-[67px] mt-[154px]">
                <AboutContant
                  heading='Family Business'
                  singlePera='We have over 40 years experience in the industry and you are getting service from a family not a sales force!'
                />
                 <AboutContant
                  heading='Competitive Prices'
                  singlePera='Our commitment to our customers is to delivery the best possible prices, sometimes as much as 50% cheaper than our  competitors using the same product.'
                />
                 <AboutContant
                  heading='Market Leading Products'
                  singlePera='We only use the best available materials, all  with BBA approvals and lengthy guarantees.'
                />
              </div>
  
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}

export default About
