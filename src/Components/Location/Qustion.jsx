import React, { useState } from 'react';
import RightArrow from './RightArrow'; // Ensure you have a component for the arrow

const Question = ({ title }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="question-container">
      <div className="faq" onClick={handleClick}>
        <h1 className="question-title">{title}</h1>
        <RightArrow className={`arrow-icon ${toggle ? 'rotate' : ''}`} />
      </div>
      {toggle && (
        <div className="toggle-content">
          <h1>Q: How do you ensure the security of my data?</h1>
        </div>
      )}
    </div>
  );
};

export default Question;
