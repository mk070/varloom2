import React, { useState, useEffect } from 'react';

const colors = [
  'bg-primary-white',
  'bg-trinary-green',
  'bg-neutral-blue',
];

export const Hero = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const changeColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

    };

    const intervalId = setInterval(changeColor, 4000);
    console.log('index==',intervalId)


    return () => clearInterval(intervalId);
  },[]);


  return (
    <div className={`hero flex h-screen w-full items-center justify-center ${colors[currentColorIndex]}`}>
      Hero
    </div>
  );
};
