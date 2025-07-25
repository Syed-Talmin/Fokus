import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 374;
const FRAME_PATH = (i) =>
  `/bg_removed_images/${i.toString().padStart(4, "0")}.jpg`;

const ScrollCanvasFrames = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frame = useRef(0);

  useEffect(() => {
    const loaded = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      loaded.push(img);
    }
    setImages(loaded);
  }, []);

  useEffect(() => {
    if (!images.length) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const render = () => {
      const img = images[Math.floor(frame.current)];
      if (!img) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(); 
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); 

    gsap.to(frame, {
      current: TOTAL_FRAMES - 1,
      snap: "current",
      ease: "none",
      scrollTrigger: {
        trigger: ".canvas-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      onUpdate: render,
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [images]);

  return (
    <div className="w-full h-[400vh] canvas-section relative">
      <canvas
        ref={canvasRef}
        className="sticky top-0 w-full h-[100dvh] sm:h-screen bg-black"
      />
    </div>
  );
};

export default ScrollCanvasFrames;
