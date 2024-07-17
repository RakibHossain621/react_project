import React from 'react'

export const Hero = () => {
  return (
    <div className='hero sec_padding'>
      <div className="container">
        <div className="hero_wrapper flex gap-[21px]">
          <div className="hero_left">
            <h1>ROOFERS IN <span>MANCHESTER & NORTH CHESHIRE</span></h1><br />
            <p>At North West Roofers Ltd we specialise in all aspects of roofing including new roofs, roof repairs, flat roofing, guttering & roof drone <br /> surveys.</p>
          </div>
          <div className="hero_right">
            <div className='from_conatiner'>
              <h2>Request A FREE Quote</h2>
              <form className='from'>
                <div className='inputfiled grid grid-cols-[1fr_1fr]'>
                <div className='input_label'>
                <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className='input_label'>
                    <label>Number</label>
                    <input
                      type="text"
                      name="contractNumber"
                      placeholder="Your number"

                    />
                  </div>

                  <div className="input_label">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"

                    />
                  </div>
                  <div className="input_label">
                    <label>Post Code</label>
                    <input
                      type="text"
                      name="postCode"
                      placeholder="Code"

                    />
                  </div>

                </div>
                <textarea
                  name="message"
                  placeholder="Type your message"
                  rows={6}
                />
                <div className="herobtn">
                  <button className='hero_btn'>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
