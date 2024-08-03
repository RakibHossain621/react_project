import React from 'react'

const LocationCompo = ({ image, title, subtitle, subtitle1,roofer1 }) => {
  return (
    <div className={`roofer_card ${roofer1} lg:flex mt-[72px] `}>
      <div className="roofer_img lg:w-[50%] w-[100%]">
        <img src={image} alt="image" />
      </div>
      <div className='roofer_head lg:w-[50%] w-[100%] lg:px-[52px] lg:py-[15px] mt-[30px] lg:mt-0'>
        <h1 className='lg:text-[32px] text-[20px] font-semibold text-center md:text-left lg:text-left '> {title} </h1>
        <div className='subPera'>
          <p className='text-[14px] font-normal  text-[#2947A9] leading-[122.022%] tracking-[2.8px] mt-10	'> {subtitle} </p>
          <p className='text-[14px] font-normal  text-[#2947A9] leading-[122.022%] tracking-[2.8px] mt-2'> {subtitle1} </p>
        </div>
      </div>
    </div>
  )
}

export default LocationCompo
