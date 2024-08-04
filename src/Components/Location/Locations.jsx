import React from 'react'

const Locations = () => {
    return (
        <div className='wrapper flex gap-[20px]'>
            <div className="left md:w-[50%] w-[100%]">
                <h1>Direction</h1>
                <img src="Map.png" alt="" />
            </div>
            <div className="right1 md:w-[50%] w-[100%] py-[44px]">
                <h1>Get in touch</h1>
                <div className=" input_group flex flex-col">
                    <input className='px-[32px] py-[17px] border border-[#9E9E9E]' type="text" placeholder='Enter Your Name' />
                    <input type="text" placeholder='Enter a valid email' />
                    <textarea name="text" placeholder='Enter a your massage'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Locations
