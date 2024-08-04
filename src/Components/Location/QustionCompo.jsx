import React from 'react'
import Qustion from './Qustion'

const QustionCompo = () => {
    return (
        <div className='md:px-[120px] px-4'>
            <div className='text-center'>
                <h1 className='lg:text-[36px] mt-4 text-[31px] font-extrabold text-[#2947A9]'>Frequently Asked <span className='text-[36px] font-extrabold text-[#211F1E]'> Questions</span></h1>
            </div>  
                 <Qustion
                  title = 'Q: How do you ensure the security of my data?'
                 />
                 <Qustion
                  title = 'Q: How do you ensure the security of my data?'/>
                 <Qustion
                  title = 'Q: How do you ensure the security of my data?'
                 />
                 <Qustion
                  title = 'Q: How do you ensure the security of my data?'
                 />
                 <Qustion
                  title = 'Q: How do you ensure the security of my data?'
                 />
                    
                
          
        </div>
    )
}

export default QustionCompo
