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


    // text animation
    const characters = document.querySelectorAll('.char');
    characters.forEach((char, index) =>{
      setTimeout(() => {
        char.classList.add('animated');
      },index *2000);
    });


    const intervalId = setInterval(changeColor, 4000);
    return () => clearInterval(intervalId);
  },[]);


  return (
    <div className={`hero  flex h-screen flex-col w-full items-center justify-center ${colors[currentColorIndex]}`}>
      <div className="flex text-[190px] gap-1">
        <span className='char'>T</span>
        <span className='txt'>R</span>
        <span className='char'>A</span>
        <span className='txt'>N</span>
        <span className='txt'>S</span>
        <span className='char'>F</span>
        <span className='txt'>O</span>
        <span className='txt'>R</span>
        <span className='char'>M</span>
      </div>
      <div className="flex flex-row gap-24">
      <div className="flex text-[160px] gap-1">
        <span className='char'>I</span>
        <span className='txt'>D</span>
        <span className='char'>E</span>
        <span className='txt'>S</span>
      </div> 
      <div className="flex text-[160px] gap-1">
        <span className='char'>H</span>
        <span className='txt'>E</span>
        <span className='txt'>R</span>
        <span className='char'>E</span>
      </div> 
      </div> 
    </div>
  );
};


