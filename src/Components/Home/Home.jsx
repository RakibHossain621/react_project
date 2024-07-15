import React from 'react'
import './Home.css';
import ServiceCard from '../Services/ServiceCard';
import ImageBottom from '../../Icon/ImageBottom';
import ImageBottom1 from '../../Icon/ImageBottom1';

const Home = () => {
  return (

    <section>
      <div className='hero'>
      </div>
      <div className="container">
      </div>


      <div className='sec_padding'>
        <div className="container">
          <div className="roofing_wrapper">
            <div className="roofing_left">
              <h1>Manchester No.1 Roofing Specialists</h1>
              <p className='mt-4'>North West Roofers Ltd offer all aspects of quality roofing services you can rely on throughout Greater Manchester and North Cheshire.</p>
              <p className='mt-4'>Our reputation matters to us. We are Members of the Confederation of Roofing Contractors and Firestone Rubber Roofing-approved contractors. Our work is guaranteed, and we have public liability insurance for up to £1million.</p>
              <div className="second_head mt-5">
                <h1 className='mt-4'>Quality Roofing Services You Can Trust!</h1>
                <p className='mt-4'>Our reputation matters to us. We are Members of the Confederation of Roofing Contractors and Firestone Rubber Roofing-approved contractors. Our work is guaranteed, and we have public liability insurance for up to £1million.</p>
                <p className='mt-4'>Call <span> 0111 756 </span> or <span>4973  0111</span> <span>826 4973</span>   or  email <span>info@tho.com</span> for a free, no-obligation quote. Also ask us about our OAP discount.</p>
              </div>
            </div>
            <div className="roofing_right">
              <img src="hero.png" alt="" />

            </div>
          </div>
        </div>
      </div>
      {/* service section start */}
      <div className='sec_padding'>
        <div className="container">
          <div className="service_wrapper">
            <ServiceCard
              image='image 6.png'
              svg={<ImageBottom />}
              title='Flat Roofing'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              Subtitile='Flat roofing'


            />

            <ServiceCard
              image='image 11.png'
              svg={<ImageBottom1 />}
              title='New Roof'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              Subtitile='New Roof'

            />

            <ServiceCard
              image='image 12.png'
              svg={<ImageBottom1 />}
              title='Lead Work'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              Subtitile='Lead Work'

            />

            <ServiceCard
              image='image 14.png'
              svg={<ImageBottom />}
              title='Roof Repairs'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              Subtitile='Roof Repairs'

            />



           





          </div>
        </div>

      </div>




    </section>


  )
}

export default Home



