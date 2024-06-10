import React from 'react';

const Menu = () => {
  return (
    <nav className=" h-full gap-y-20 w-12 z-10 justify-center flex-col fixed items-center flex">
      <a href="http://" className='w-32 h-12 bg-zinc-800 text-gray-200 flex items-center justify-center border-r-2 -rotate-90 hover:bg-trinary-green hover:text-secondary-black hover:scale-90'>Home</a>
      <a href="http://" className='w-32 h-12 bg-zinc-800 text-gray-200 flex items-center justify-center border-r-2 -rotate-90 hover:bg-trinary-green hover:text-secondary-black hover:scale-90'>Services</a>
      <a href="http://" className='w-32 h-12 bg-zinc-800 text-gray-200 flex items-center justify-center border-r-2 -rotate-90 hover:bg-trinary-green hover:text-secondary-black hover:scale-90'>Projects</a>
      <a href="http://" className='w-32 h-12 bg-zinc-800 text-gray-200 flex items-center justify-center border-r-2 -rotate-90 hover:bg-trinary-green hover:text-secondary-black hover:scale-90'>About</a>
      <a href="http://" className='w-32 h-12 bg-zinc-800 text-gray-200 flex items-center justify-center border-r-2 -rotate-90 hover:bg-trinary-green hover:text-secondary-black hover:scale-90'>Contact</a>
    </nav>
  );
};

export default Menu;
  