import React, { useState, useEffect } from 'react';
import textFit from 'textfit';

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
    characters.forEach((letters, index) =>{
      setTimeout(() => {
        letters.classList.add('animated');
      },index *1000);
    });

    const intervalId = setInterval(changeColor, 4000);
    return () => clearInterval(intervalId);
  },[]);

  useEffect(() => {
    textFit(document.getElementsByClassName('hero-title'));
    textFit(document.getElementsByClassName('hero-title_2'));
  }, []); // Run once after the component mounts

  return (
    <div className={`hero  flex h-screen flex-col w-full items-center justify-center ${colors[currentColorIndex]}`}>
      <div className="hero-title flex gap-1">
        <span className='letters'>T</span>
        <span >R</span>
        <span className='letters'>A</span>
        <span >N</span>
        <span >S</span>
        <span className='letters'>F</span>
        <span >O</span>
        <span >R</span>
        <span className='letters'>M</span>
        </div>
      <div className="hero-title_2 flex text-[80px] gap-1 my-[-100px]">
        <span className='letters'>M</span>
        <span >A</span>
        <span >R</span>
        <span className='letters'>K</span>
        <span >E</span>
        <span className='letters'>T</span>
      </div> 
    </div>
  );
};
