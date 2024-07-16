import React from 'react'

export const Hero = () => {
  return (
    <div className='hero sec_padding'>
      <div className="container">
        <div className="hero_wrapper flex gap-2">
          <div className="hero_left">
            <h1>ROOFERS IN <span>MANCHESTER & NORTH CHESHIRE</span></h1>
            <p>At North West Roofers Ltd we specialise in all aspects of roofing including new roofs, roof repairs, flat roofing, guttering & roof drone surveys.</p>
          </div>
          <div className="hero_right">
            <div className='from_conatiner'>
              <h2>Request A FREE Quote</h2>
              <form className='from'>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  name="contractNumber"
                  placeholder="Your number"
                  
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  
                />
                <input
                  type="text"
                  name="postCode"
                  placeholder="Code"
                 
                />
                <textarea
                  name="message"
                  placeholder="Type your message"
                 
                />
                <button>SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
