import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";  // Assuming you have installed the split-type library

gsap.registerPlugin(ScrollTrigger);


const Paragraph = styled.p`
  color: white; /* Assuming text-primary-white is white */
`;

const About = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char, i) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="flex justify-center w-full bg-primary-white items-center h-[70vh]">
      <p 
        className="reveal-type text-3xl px-48"
        // data-bg-color="rgb(250, 246, 239)" //try this
        data-bg-color="rgb(214 208 196)" 
        data-fg-color="#27272A"
      >
        Welcome to Varloom, where creativity meets cutting-edge technology. We are a premier creative agency specializing in web development and design, with a distinct emphasis on 3D animations and interactive, engaging experiences. Our passion is to bring your vision to life with futuristic designs that make your website stand out in the digital landscape.


      </p>
    </section>
  );
};

export default About;
