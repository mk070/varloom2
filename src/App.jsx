import './App.css';
import Logo from './layout/Logo';
import React from 'react';
import Menu from './layout/Menu';
import { Hero } from './components/Hero';
import  About  from './components/About';

function App() {
  return (
    <>
      <Menu />
      <Logo />
      <Hero />
      <About />
    </>
  );
}

export default App;
