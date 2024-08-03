import React from 'react'
import SvgCompont from './SvgCompont'

const Customer = ( {title, subtitle, subcontant  } ) => {
  return (
    <div className='single_conatnt'>
       <h1> {title} </h1>
       <p> {subtitle} </p>
        <div className='flex  items-center'>
             <SvgCompont/>
             <h3> {subcontant} </h3>
        </div>
    </div>
  )
}

export default Customer
