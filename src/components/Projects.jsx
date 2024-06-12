import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'First Project',
    image: 'https://via.placeholder.com/800x400.png?text=First+Project+Image'
  },
  {
    title: 'Second Project',
    image: 'https://via.placeholder.com/800x400.png?text=Second+Project+Image'
  },
  {
    title: 'Third Project',
    image: 'https://via.placeholder.com/800x400.png?text=Third+Project+Image'
  }
];

export const Projects = () => {
  useEffect(() => {
    projects.forEach((project, index) => {
      ScrollTrigger.create({
        trigger: `.image-${index}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setTitle(project.title),
        onEnterBack: () => setTitle(project.title)
      });
    });
  }, []);

  const setTitle = (title) => {
    const titleElement = document.getElementById('project-title');
    titleElement.innerText = title;
  };

  return (
    <div className="relative sticky">
      <div
        id="project-title"
        className="absolute z-10 text-2xl top-1/2 left-1/2"
      >
        There are no images displaying
      </div>
      <div className="h-[150vh]"></div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`image-${index} mb-[50vh] text-center`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      ))}
      <div className="h-[150vh]"></div>
    </div>
  );
};
