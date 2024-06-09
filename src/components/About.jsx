import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    
  return (
    <div className='flex h-screen w-full items-start bg-secondary-black justify-center'>
        <h1 className='text-primary-white'>Welcome to [Your Agency Name], where creativity meets cutting-edge technology. We are a premier creative agency specializing in web development and design, with a distinct emphasis on 3D animations and interactive, engaging experiences. Our passion is to bring your vision to life with futuristic designs that make your website stand out in the digital landscape.</h1>
    </div>
  )
}
