import React,{useEffect} from 'react'

export const Hero = () => {
  useEffect(() =>{
    const characters = document.querySelectorAll('.char');
    characters.forEach((char,index) => {
      setTimeout(() =>{
        char.classList.add('animated');
      }, index* 900);
    });
  },[]);

  return (
    <>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="text-6xl flex gap-1">
              <span>T</span>
              <span>R</span>
              <span className='char'>A</span>
              <span>N</span>
              <span className='char'>S</span>
              <span>F</span>
              <span>O</span>
              <span className='char'>R</span>
              <span>M</span>
            </div>
          </div>
        </div>
    </>  
)
}
