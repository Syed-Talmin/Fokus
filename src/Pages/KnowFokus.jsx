import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const KnowFokus = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollEl = document.querySelector("#main-container");

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      id="main-container"
      data-scroll-container
      className="bg-[#fffbe6] text-black px-4 sm:px-8 md:px-20 py-12 md:py-16 font-sans"
    >
      {/* Section 1 */}
      <section className="mb-24 md:mb-32 flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="md:w-1/2 space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block">KNOW FOKUS,</span>
            <span className="block text-yellow-500">KNOW US</span>
          </h1>
          <div className="space-y-3 text-base md:text-lg">
            <p>
              <strong>We're more than just a brand</strong> — we’re a vibrant community
              driven by passion, purpose, and a shared vision for a better lifestyle.
            </p>
            <p>
              With your favorite content creators — Abhishek Malhan, Nischay Malhan,
              Mayank Mishra and more — Fokus is here to create drinks that not only
              refresh but empower.
            </p>
            <p>
              <strong>Our mission</strong> is simple: deliver clean, functional hydration
              that fits seamlessly into your lifestyle.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-4 md:p-10">
          <img className="w-full rounded-xl" src="/N02.jpg" alt="Fokus Influencer" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center mb-24 md:mb-32">
        <div className="md:w-1/2 space-y-10">
          <div className="bg-red-100 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">The Secret Sauce of Fokus</h3>
            <ul className="list-disc ml-5 text-base">
              <li>Vitamin D3 - to beat the sunshine deficiency</li>
              <li>No Sugar - guilt free energy</li>
              <li>22% Coconut Water - for the beach vibe</li>
            </ul>
          </div>

          <div className="bg-black text-white p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Cool Look, Cooler Conscience</h3>
            <p>
              Every Fokus bottle is bold, recyclable and sugar-free. It’s designed to
              look great and feel even better.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">#GetFokus Revolution</h3>
            <p>
              With creators at the heart, we’re on a mission to fuel your goals. Join the
              clean, functional energy revolution!
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-full p-4 md:p-10">
          <img
            src="/1.webp"
            alt="Fokus"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="text-center mb-24 md:mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          The Fokus Founders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "Ankit Madan", img: "//fokus.shop/cdn/shop/files/image_10.png" },
            { name: "Mayank Mishra", img: "//fokus.shop/cdn/shop/files/image_8.png" },
            { name: "Aman Madan", img: "//fokus.shop/cdn/shop/files/image_5.png" },
            { name: "Nischay Malhan", img: "//fokus.shop/cdn/shop/files/image_6.png" },
            { name: "Abhishek Malhan", img: "//fokus.shop/cdn/shop/files/image_7.png" },
          ].map((person, i) => (
            <div key={i} className="text-center">
              <img
                src={person.img}
                alt={person.name}
                className="rounded-xl w-full aspect-[3/4] object-cover shadow-md hover:scale-105 transition duration-300"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">{person.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KnowFokus;
