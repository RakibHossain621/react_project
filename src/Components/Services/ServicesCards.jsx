import React from 'react';
import ServiceArrowIcon from './ServiceArrowIcon';
const ServicesCards = ({ image, title, subtitle, buttontitle, card1, border }) => {
  return (
    <div className={`card ${card1} lg:flex  mt-[72px]`}>
      <div className='lg:w-[50%] w-[100%] '>
        <img className='w-[100%] h-[100%]' src={image} alt={title} />
      </div>

      <div className={` lg:px-[72px] ${border} border-t border-b  border-[#2947A9] lg:py=[72px]  p-[33px] lg:w-[50%] md:px-[50px] py-[50px] w-[100%]`}>
        <h1 className='text-[32px] text-[#2947A9] font-bold '>{title}</h1>
        <p className='text-[16px] font-normal text-[#2947A9] leading-[normal] max-w-[409px] mt-[58px]	 '>{subtitle}</p>
        <div className='flex mt-[58px] items-center gap-2 '>
          <h6 className='text-[#FF5733] text-[16px] font-normal 	'>{buttontitle}</h6>
          <ServiceArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;