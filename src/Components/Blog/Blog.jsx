import React from 'react'
import BlogSingle from './BlogSingle'

const Blog = () => {
  return (
    <div className='blog'>
      <div className=' flex justify-center items-center flex-col bg-[#EEF2FF]'>
        <h1 className='text-[48px] font-semibold	text-[#000] '>Fresh News</h1>
        <p className='text-[24px] font-medium	text-[#000] text-center max-w-[592px] pb-[72px] px-[32px] lg:px-0 '>Stay tuned to our news feed where we share the latest industry trends and explore the topics setting the digital world on fire.</p>
      </div>
      <div className="container px-[32px] lg:px-0">
        <div className="wrapper">
          <BlogSingle/>
        </div>
      </div>
    </div>
  )
}

export default Blog
