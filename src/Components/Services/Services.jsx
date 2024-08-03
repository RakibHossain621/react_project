import React from 'react'
import ServicesCards from './ServicesCards'
import FollowingCard from './FollowingCard'
import FollowingCardSvg1 from './FollowingCardSvg1'
import FollowingCardSvg2 from './FollowingCardSvg2'
import FollowingCardSvg3 from './FollowingCardSvg3'
import FollowingCardSvg4 from './FollowingCardSvg4'
import FollowingCardSvg5 from './FollowingCardSvg5'


const Services = () => {
  return (
    <div className='service '>
      <div className="service_heading px-[32px] lg:px-[100px]">
        <h1>Services</h1>
      </div>
      <div className="ServiceCard_wrapper lg:px-[100px] px-[32px]">
        <ServicesCards
          image='Services1.png'
          title='Firestone Rubber Roofs'
          subtitle='EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide...'
          buttontitle='Firestone rubber roofs'
          icon = 'true'
          border='border-r border-l sm:border-l-none'
        />
        <ServicesCards
          image='Services2.png'
          title='Roof Replacements'
          subtitle='EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide...'
          buttontitle='Roof replacements'
          card1='flex-row-reverse'
          icon = 'true'
          border='border-l border-r sm:border-r-none'
        />

        <ServicesCards
          image='Services3.png'
          title='Conservatory Ceiling Insulation'
          subtitle='EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide...'
          buttontitle='Conservatory Ceiling Insulation'
          icon = 'true'
          border='border-r border-l border-l-none'
        />
        <ServicesCards
          image='Services4.png'
          title='Roof Replacements'
          subtitle='EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide...'
          buttontitle='Roof Replacements'
          card1='flex-row-reverse'
          border='border-l border-r sm:border-r-none'
          icon = 'true'
        />
      </div>

      <div className='sec_padding'>
        <div className="container">
          <div className="qualified_heading text-center">
            <h1 className='text-[28px] font-bold text-[#000] '>We use fully qualified tradesmen in all of the following areas</h1>
          </div>
          <div className="qulaified_wrapper">
             <div className='lg:flex gap-[20px] mt-[58px]  px-[32px] py-[32px] '>
             <FollowingCard
              icon={<FollowingCardSvg1 />}
              title='Electrical'
              subtitle='We professionally install spotlights, audio walls & general home electrics.'
            />
            <FollowingCard
              icon={<FollowingCardSvg2 />}
              title='Repair'
              subtitle='We professionally install spotlights, audio walls & general home electrics.'
            />
            <FollowingCard
              icon={<FollowingCardSvg3 />}
              title='Carpentry'
              subtitle='We professionally install spotlights, audio walls & general home electrics.'
            />
             </div>
             <div className='lg:flex gap-[20px]  lg:px-[176px] px-[32px] py-[32px]'>
             <FollowingCard
              icon={<FollowingCardSvg4/>}
              title='Remodeling'
              subtitle='We professionally install spotlights, audio walls & general home electrics.'
            />
            <FollowingCard
              icon={<FollowingCardSvg5 />}
              title='Electrical'
              subtitle='We professionally install spotlights, audio walls & general home electrics.'
            />
             </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Services
