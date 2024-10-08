import React from 'react'

const AboutContant = ({heading,singlePera}) => {
  return (
    <div className="singleContant">
       <div className="single_conatant1 sm:text-[18px] md:text-[24px] mt-8  ">
          <h1 className=' whitespace-nowrap'> {heading} </h1>
          <p dangerouslySetInnerHTML={{__html:singlePera}}></p>
       </div>
    </div>
  )
}

export default AboutContant