import React, { useState } from 'react'
import RightArrow from './RightArrow'

const Qustion = ( {title} ) => {
    useState = [toggle ,setToggle] = [false]
     const handalClick = {
        setToggle 
     }
  return (
   <div className="div">
     <div className='faq'onClick={handalClick}>
      <h1> {title}</h1>
      <div>
      <RightArrow/>
      </div>
    </div>
     <div className='toggle'>
       <h1>Q: How do you ensure the security of my data?</h1>
     </div>
   </div>
  )
}

export default Qustion
