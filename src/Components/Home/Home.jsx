import React from 'react'
import './Home.css';
import ServiceCard from '../Services/ServiceCard';
import ImageBottom from '../../Icon/ImageBottom';
import ImageBottom1 from '../../Icon/ImageBottom1';
import { Hero } from './Hero';
import { Roffing } from './Roffing';

const Home = () => {
  return (

    <section>
      <Hero/>
     <Roffing/> 

      {/* service section start */}
      <div className='sec_padding'>
        <div className="container">
          <div className="service_wrapper grid grid-cols-2 gap-8">
            <ServiceCard
              image='image 6.png'
              svg={<ImageBottom />}
              title='Flat Roofing'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              subtitle='Flat roofing'


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



