// AnimatedText.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ text }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [text]);

  return (
    <div style={{ display: 'inline-block', overflow: 'hidden' }}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
