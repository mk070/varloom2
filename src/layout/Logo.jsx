import React from 'react';

const Logo = () => {
  return (
    <div className="z-10 logo-wrapper mt-3">
      <div className="logo-container">
        <span className="initial-text font-blink">
          <span className='text-trinary-green'>{'{'}</span>
            VL
          <span className='text-neutral-blue'>{'}'}</span>
        </span>
        <span className="full-text font-blink">
          <span className='text-trinary-green'>{'{'}</span>
           Varloom
          <span className='text-neutral-blue'>{'}'}</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
