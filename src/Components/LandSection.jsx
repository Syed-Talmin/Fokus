import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const images = ["/fokus_green.webp", "/fokus_red.webp", "/fokus_yellow.webp"];

const getCSSVariable = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const bgColorMap = {
  "/fokus_green.webp": getCSSVariable("--color-green"),
  "/fokus_red.webp": getCSSVariable("--color-red"),
  "/fokus_yellow.webp": getCSSVariable("--color-yellow"),
};

 const LandSection =() =>{
  const [index, setIndex] = useState(0);
  const imageRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const headingText = " Stay Active, Stay Hydrated.";

  useEffect(() => {
    setTimeout(() => {
      slideImages(0);
    },2000)
  }, []);

  useEffect(() => {

    if (isHovered) return;
    const interval = setInterval(() => {
      slideImages((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, isHovered]);

  const slideImages = (newIndex) => {
    const current = newIndex;
    const next = (current + 1) % images.length;
    const next2 = (current + 2) % images.length;

    imageRefs.current.forEach((img, i) => {
      gsap.set(img, { zIndex: 1 });
    });

    gsap.to(imageRefs.current[current], {
      left: "50%",
      scale: 1.5,
      zIndex: 30,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(imageRefs.current[next], {
      left: "85%",
      scale: 1,
      zIndex: 10,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(imageRefs.current[next2], {
      left: "15%",
      scale: 1,
      zIndex: 10,
      duration: 0.8,
      ease: "power3.inOut",
    });

    setIndex(current);
  };

  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = `translate(0px, 0px)`;
  };


  const handleImageHover = (e) => {
    const centerImg = imageRefs.current[index];
    if (!centerImg) return;

    const rect = centerImg.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(centerImg, {
      transform: `translate(-50%, -50%) translate(${x * 0.2}px, ${
        y * 0.2
      }px) scale(1.6)`,
      scale: 1.6,
      ease: "power2.out",
      duration: 0.3,
    });
  };

  const resetImageHover = () => {
    const centerImg = imageRefs.current[index];
    if (!centerImg) return;

    gsap.to(centerImg, {
      transform: `translate(-50%, -50%) scale(1.5)`,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  useEffect(() => {
    gsap.fromTo(".heading-text", {
      opacity: 0,
      y: 50,
    },{
      opacity: 1,
      y: 0,
      duration: .5,
      stagger: 0.04
    })
  },[])


  return (
    <div
      style={{
        backgroundColor: `${bgColorMap[images[index]]}`,
      }}
      className="w-full h-screen flex flex-col overflow-hidden items-center justify-end pb-8 transition-colors duration-1000 ease-in-out"
    >
      <div
        className="absolute z-1 top-0 left-0 w-full h-screen"
        style={{ backgroundImage: "radial-gradient(transparent, #101010)" }}
      ></div>

      
      <div className="relative w-full flex justify-center px-4 md:px-0">
        <div className="relative w-full max-w-[95%] md:max-w-[80%] h-[50vh] md:h-[70vh] flex items-center justify-center">
          <img
            className="w-[80%] md:w-[70%] opacity-40"
            src="https://fokus.shop/cdn/shop/files/RGB_Digital_Use__Fokus_Logo_Black.png?v=1718300315&width=280"
            alt=""
          />
          {images.map((src, i) => (
            <img
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                resetImageHover();
              }}
              onMouseMove={(e) => {
                if (i === index) handleImageHover(e);
              }}
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              src={src}
              alt=""
              className={`absolute top-1/2 h-[35vh] md:h-[50vh] object-cover rounded-xl`}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>

      <h1 className="mt-4 h-fit overflow-hidden text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0e0e0e] text-center tracking-tight drop-shadow-lg animate-pulse uppercase px-4">
        {
          headingText.split("").map((char, i) => (
            <span
            className="heading-text inline-block"
              key={i}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))
        }
      </h1>

      <div className="group relative mt-6 inline-flex items-center justify-center px-4">
        <Link to="/product"
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative px-6 sm:px-7 py-2 sm:py-3 text-[var(--color-text)] text-sm sm:text-base font-semibold border border-black rounded-lg overflow-hidden group z-10 transition-transform duration-300 ease-out"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
            Fuel Up with Fokus ⚡
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LandSection;