import React from 'react';
import './BackgroundAnimation.scss';

const BackgroundAnimation: React.FC = () => {
  const circles = Array.from({ length: 200 });

  return (
    <div className="container">
      {circles.map((_, index) => (
        <div key={index} className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
