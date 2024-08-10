import React, { useState } from 'react';
import RightArrow from './RightArrow';

const Question = ({ title }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="question-container">
       <div className="faq md:px-[40px] md:py-[40px] px-[16px] py-[16px]" onClick={handleClick}>
        <h1 className="question-title text-[16px] lg:text-[20px] text-[#303030] ">{title}</h1>
        <RightArrow className={`arrow-icon ${toggle ? 'rotate' : ''}`} />
      </div>
      {toggle && (
        <div className="toggle-content">
          <h1>Q: How do you ensure the security of my data?</h1>
        </div>
      )}
      <div>
     
     </div>
     
    </div>
  );
};

export default Question;
