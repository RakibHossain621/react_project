import React from 'react'
import LocationCompo from './LocationCompo'
import QustionCompo from './QustionCompo'
import Locations from './Locations'


const roofer_background = {
  backgroundImage: 'url(/Roofer.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

}
const Location = () => {
  return (
    <div className='Roofers'>
      <div style={roofer_background} className="roofer_heading md:py-[171px] text-center md:text-[48px] font-bold text-[#fff] py-[20px] text-[35px]">
        <h1>Roofers Bolton</h1>
      </div>
      <div className="container">
        <LocationCompo
          image='public/Roofer1.png'
          title='Conservatory Roofs Bolton '
          subtitle='Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals.'
          subtitle1='Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals.
'
        />
        <LocationCompo
          image='public/Roofer1.png'
          title='Flat Garage Roofs '
          subtitle='Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals.'
          subtitle1='Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals.'
          roofer1='flex-row-reverse	'
        />

        <div className=" space-y-8 text-[18px] font-medium leading-[122.022%] tracking-[1.44px] mt-[72px] md:px-[120px] px-[16px] ">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

          <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look .</p>

          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look .</p>
        </div>
        <QustionCompo/>
        <Locations/>
      </div>
        
      
    </div>
    
  )
}

export default Location
