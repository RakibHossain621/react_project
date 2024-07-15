import React from 'react'
import RightArrowIcon from '../../Icon/RightArrowIcon'

const ServiceCard = ({image,svg,title,pera,Subtitle}) => {
  return (
    <div className='singleServices'>
      <div className="serviceCard">
      <img src = {image} alt=""  />
        {svg}  
      </div>
       <div className="Description">
        <h1>{title}</h1>
        <p> {pera}</p>
       </div>
       <div className="serviceIcon">
         <h1> {Subtitle} </h1>
         <RightArrowIcon></RightArrowIcon>
       </div>
    </div>
  )
}

export default ServiceCard
