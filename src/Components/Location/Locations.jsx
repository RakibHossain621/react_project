import React from 'react'

const Locations = () => {
    return (
        <div className='wrapper lg:flex gap-[20px] pt-[20px] '>
            <div className="left lg:w-[50%] w-[100%]">
                <h1 className='text-[36px] text-[#000] font-semibold mb-4 '>Direction</h1>
                <img src="Map.png" alt="map"/>
                <p className='text-[18px] font-medium text-[#000] mt-[32px]'>It is a long established fact that a reader will be distracted by the readable content of  a  page when looking at its layout.</p>
            </div>
            <div className="right1 lg:w-[50%] w-[100%] py-[57px] ">
                <h1 className='text-[36px] font-medium text-[#000] mb-[20px] '>Get in touch</h1>
                <div className=" input_group flex flex-col">
                    <input className='px-[32px] py-[17px] border border-[#9E9E9E] text-[14px] font-normal	text-[#9E9E9E] rounded-md	 ' type="text" placeholder='Enter Your Name' />
                    <input className='px-[32px] py-[17px] border border-[#9E9E9E] mt-5 text-[14px] font-normal	text-[#9E9E9E] rounded-md	  ' type="text" placeholder='Enter a valid email' />
                    <textarea className='pt-[16px] pl-[16px] pb-[93px] border  border-[#9E9E9E] mt-5 text-[14px] font-normal	text-[#9E9E9E] rounded-md ' name="text" placeholder='Enter a your massage'></textarea>

                    <div className='flex justify-end mt-[102px]' >
                    <button className='button'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations
