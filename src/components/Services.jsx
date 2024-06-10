import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const Services = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Center the text elements
    const centerX = 0;
    const centerY = 0;

    // Add text elements
    const createText = (text, positionZ) => {
      const loader = new FontLoader();
      loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new TextGeometry(text, {
          font: font,
          size: 1,
          height: 0.2,
        });
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(centerX, centerY, positionZ);
        scene.add(mesh);
      });
    };

    createText('services', 0);
    createText('services2', -100);
    createText('services3', -300);

    camera.position.z = 1;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const services = scene.children.filter((child) => child.type === 'Mesh');
      services.forEach((service, index) => {
        service.position.z = -10 - index * 10 + scrollY * 0.01;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className='overflow-hidden'/>;
};

export default Services;
