import React, { useEffect, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile if less than 768px
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  const paragraphText =
    "Fokus isn't just another beverage—it's a meticulously crafted performance drink, powered by science-backed ingredients that enhance your focus, boost hydration, and keep you mentally and physically sharp throughout your busiest days and toughest challenges.";

  useEffect(() => {
    gsap.fromTo(
      ".word",
      { opacity: 0.3 },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
  data-scroll-container
  className="about w-full min-h-[150vh] bg-[var(--color-bg)] bg-cover px-4 sm:px-6 py-16 sm:py-20"
>
  <div className="flex flex-col md:flex-row items-start min-h-[120vh] justify-center max-w-[90rem] mx-auto gap-14 md:gap-10 relative">
    
    
    <div className="w-full relative pl-5 md:pl-0 z-10 md:flex-1 flex flex-col justify-between items-center gap-10 self-center order-1 md:order-none">
      <div data-scroll {...(!isMobile && { "data-scroll-speed": "0.4" })}>
        <img
          src="/5.webp"
          alt="Left 1"
          className="w-full max-w-[90%] sm:max-w-sm object-cover rounded-xl shadow-xl"
        />
      </div>
      <div data-scroll {...(!isMobile && { "data-scroll-speed": "0.8" })}>
        <img
          src="/1.webp"
          alt="Left 2"
          className="w-full max-w-[90%] sm:max-w-sm object-cover rounded-xl shadow-xl"
        />
      </div>
    </div>

  
    <div className="w-full md:flex-1 flex flex-col items-center sticky top-16 text-center md:text-left z-10 pt-10 sm:pt-20 order-0 md:order-none">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-800 uppercase text-center md:text-left px-2">
        Trusted by Top Athletes
      </h2>
      <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-5 text-[var(--color-text)] font-semibold leading-tight md:text-left px-2">
        {paragraphText.split(" ").map((word, i) => (
          <span key={i} className="word inline-block">
            {word}&nbsp;
          </span>
        ))}
      </p>
      <button onClick={()=> navigate("/product")} className="text-base sm:text-lg px-5 sm:px-6 py-2 sm:py-3 rounded-md bg-zinc-900 text-white mt-6 w-fit">
        SHOP NOW
      </button>
    </div>


    <div className="w-full relative z-10 pl-5 md:pl-0 md:flex-1 flex flex-col justify-between items-center gap-10 self-center order-2 md:order-none">
      <div data-scroll {...(!isMobile && { "data-scroll-speed": "0.6" })}>
        <img
          src="/N01.webp"
          alt="Right 1"
          className="w-full max-w-[90%] sm:max-w-sm object-cover rounded-xl shadow-xl"
        />
      </div>
      <div data-scroll {...(!isMobile && { "data-scroll-speed": "1" })}>
        <img
          src="N02.jpg"
          alt="Right 2"
          className="w-full max-w-[90%] sm:max-w-sm object-cover rounded-xl shadow-xl"
        />
      </div>
      <div data-scroll {...(!isMobile && { "data-scroll-speed": "1" })}>
        <img
          src="N05.webp"
          alt="Right 3"
          className="w-full max-w-[90%] sm:max-w-sm object-cover rounded-xl shadow-xl"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default AboutSection;
