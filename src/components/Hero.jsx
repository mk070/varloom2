import React, { useState, useEffect } from 'react';
import { AnimatedText } from './AnimatedText';

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

    // text animation
    const characters = document.querySelectorAll('.letters');
    characters.forEach((letters, index) => {
      setTimeout(() => {
        letters.classList.add('animated');
      }, index * 1000);
    });

    const intervalId = setInterval(changeColor, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // const texts = [
  //   { text: 'Garcity', indexes: [0, 2, 4, 6] },
  //   { text: 'TradeAnalyst', indexes: [1, 3, 5, 11] },
  //   { text: 'Intelligence', indexes: [2, 4, 6, 11] },
  // ];


  return (
    <div className={`hero  flex h-screen relative z-0  w-full  items-center justify-center ${colors[currentColorIndex]}`}>
      <div className="absolute flex flex-col items-center justify-center w-3/4 h-64 animation top-60">
        {/* <AnimatedText texts={texts} /> */}

        <div className="flex h-48 gap-1 hero-title">
          <span className='inline-block letters '>T</span>
          <span >R</span>
          <span className='letters '>A</span>
          <span >N</span>
          <span >S</span>
          <span className='letters'>F</span>
          <span >O</span>
          <span >R</span>
          <span className='letters'>M</span>
        </div>
        <div className="hero-title_2  flex text-[80px] gap-1 ">
          <span className='letters'>M</span>
          <span >A</span>
          <span >R</span>
          <span className='letters'>K</span>
          <span >E</span>
          <span className='letters'>T</span>
        </div>
      </div>

    </div>
  );
};
