import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef();

  useEffect(() => {
    gsap.to(logoRef.current, { rotation: 360, duration: 2 });
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-32">
      <div ref={logoRef} className="w-32 h-32 bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-3xl">Logo</h1>
      </div>
    </div>
  );
};

export default Logo;
