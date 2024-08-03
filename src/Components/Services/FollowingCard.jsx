import React from 'react'

const FollowingCard = ( {icon,title,subtitle} ) => {
  return (
    <div className='Following_single px-[47px] py-[34px] mb-[20px] lg:mb-0  rounded-[20px] border border-[#2947A9]'>
      <div className='flex justify-center'>
        {icon}
      </div>
      <div>
        <h1 className='text-center text-[24px] font-medium text-[#FF5733] mt-6'>{title} </h1>
        <p className='text-[16px] font-normal text-[#FF5733] mt-2 '> {subtitle}</p>
      </div>
    </div>
  )
}

export default FollowingCard
