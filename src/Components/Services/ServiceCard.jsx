import React from 'react'
import RightArrowIcon from '../../Icon/RightArrowIcon'

const ServiceCard = ({ image, title, pera, subtitle }) => {
  return (
    <div className='singleServices shadow rounded-md'>
      <div className="serviceCard">
        <img className='w-full max-w-full' src={image} alt="" />
       
      </div>
      <div className='p-8'>
        <div className="Description">
          <h1>{title}</h1>
          <p> {pera}</p>
        </div>
        <div className="serviceIcon">
          <h1> {subtitle} </h1>
          <RightArrowIcon></RightArrowIcon>
        </div>
       
      </div>
    </div>
  )
}

export default ServiceCard
