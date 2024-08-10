import React from 'react'
import './Home.css';
import ServiceCard from '../Services/ServiceCard';
import ImageBottom from '../../Icon/ImageBottom';
import ImageBottom1 from '../../Icon/ImageBottom1';
import { Hero } from './Hero';
import { Roffing } from './Roffing';
import Footer from './Footer';

const Home = () => {
  return (

    <section>
      <Hero/>
     <Roffing/> 

      {/* service section start */}
      <div className=' services sec_padding'>
        <div className="container">
          <div className="service_heading">
            <h1>Our Services</h1>
          </div>
          <div className="service_wrapper grid grid-cols-1  lg:grid lg:grid-cols-2 gap-[120px]">
            <ServiceCard
              image='service1.jpg'
              title='Flat Roofing'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              subtitle='Flat roofing'


            />

            <ServiceCard
              image='service2.jpg'
              title='New Roof'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              subtitle='New Roof'

            />

            <ServiceCard
              image='service3.jpg'
              title='Lead Work'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              subtitle='Lead Work'

            />

            <ServiceCard
              image='service4.jpg'
              title='Roof Repairs'
              pera='North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters, '
              subtitle='Roof Repairs'

            />
        </div>
        </div>
       </div>

       {/* service section end */}

    </section>


  )
}

export default Home



