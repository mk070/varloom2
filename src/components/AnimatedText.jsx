import React, { useState, useEffect } from 'react';
import SplitType from 'split-type';

export const AnimatedText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const splitText = new SplitType(`#target-${currentTextIndex}`, { types: 'chars' });

    const characters = splitText.chars;
    characters.forEach((char, index) => {
      if (texts[currentTextIndex].indexes.includes(index)) {
        char.classList.add('letters');
        setTimeout(() => {
          char.classList.add('animated');
        }, index * 500);
      }
    });

    const changeText = () => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const intervalId = setInterval(changeText, 7000);
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return (
    <div className="hero flex h-screen flex-col w-full items-center justify-center">
      {texts.map(({ text }, index) => (
        <div
          key={index}
          id={`target-${index}`}
          className={`hero-title flex flex-col gap-1 text-[150px] ${index === currentTextIndex ? 'fade-in' : 'fade-out'}`}
          style={{ display: index === currentTextIndex ? 'block' : 'none' }}
        >
          {text.split('').map((char, charIndex) => (
            <span key={charIndex} className={`animated-char ${texts[currentTextIndex].indexes.includes(charIndex) ? 'letters-animation' : ''}`}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
