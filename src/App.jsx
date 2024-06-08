import './App.css';
import Logo from './layout/Logo';
import React from 'react';
import Menu from './layout/Menu';
import { Hero } from './components/Hero';

function App() {
  return (
    <>
      <Menu />
      <Logo />
      <Hero />
    </>
  );
}

export default App;
