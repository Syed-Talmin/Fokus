import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowOffSection = () => {
  const benefits = [
    {
      title: "Vitamin D3",
      subtitle: "Supports Bone Strength",
      icon: "🦴",
    },
    {
      title: "Ginkgo Biloba",
      subtitle: "Boosts Brain Function",
      icon: "🧠",
    },
    {
      title: "Glutamine",
      subtitle: "Enhances Muscle Repair",
      icon: "💪",
    },
    {
      title: "5-HTP",
      subtitle: "Elevates Mood Naturally",
      icon: "😊",
    },
    {
      title: "Electrolyte Balance",
      subtitle: "Natural hydration from Coconut Water & Salt",
      icon: "🧂",
    },
    {
      title: "L-Carnitine L-Tartrate (LCLT)",
      subtitle: "Aids Faster Recovery",
      icon: "⚡",
    },
  ];

  useEffect(() => {
    gsap.to(".slides", {
      x: "-200%",
      ease: "linear",
      scrollTrigger: {
        trigger: ".showOff",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.to(".slideCon", {
  scrollTrigger: {
    trigger: ".showOff",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;

      if (progress < 0.33) {
        gsap.to(".slideCon", { backgroundColor: "#FF6262", duration: 0.5 });
      } else if (progress < 0.66) {
        gsap.to(".slideCon", { backgroundColor: "#FFE060", duration: 0.5 });
      } else {
        gsap.to(".slideCon", { backgroundColor: "#94DA49", duration: 0.5 });
      }
    },
  },
});

  }, []);

  useEffect(() => {
  const h1s = document.querySelectorAll(".slide1 h1");

  h1s.forEach((h1) => {
    const text = h1.textContent;
    h1.innerHTML = "";

    const spans = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      h1.appendChild(span);
      return span;
    });

    gsap.fromTo(
      spans,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: h1,
          start: "top 80%",
        },
      }
    );
  });
}, []);

  

  return (
    <div className="showOff w-full h-[300vh]">
      <div className="slideCon bg-[var(--color-red)] overflow-x-hidden sticky top-0">
        <div className="slides w-full h-screen flex">
          <div className="slide1 p-5 relative flex-shrink-0 w-full h-screen flex flex-col items-center justify-center ">
            <h1 className="text-5xl text-center md:text-7xl text-white font-black uppercase opacity-80">
              Caffeine Content
            </h1>
            <h1 className="text-5xl text-center md:text-7xl text-white font-black uppercase opacity-80">
              0 mg
            </h1>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-5 max-w-xl mx-auto my-10">
              <div className="bg-red-500 text-white p-3 rounded-full text-2xl">
                <img className="w-35" src="/no-coffee.png" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Zero Caffeine. Maximum Clarity.
                </h3>
                <p className="text-white/80 mt-1">
                  FOKUS is crafted without a single milligram of caffeine—so you
                  stay energized without the jitters, crashes, or sleepless
                  nights. Clean fuel, pure focus.
                </p>
              </div>
            </div>
            <img
              src="/leaf.png"
              className="absolute opacity-30 top-[10%] left-[15%] w-20 h-20 object-contain"
            />
            <img
              src="/no-caffeine.png"
              className="absolute opacity-40 bottom-[20%] right-[10%] w-28 h-28 object-contain"
            />
            <img
              src="/no-toxic.png"
              className="absolute opacity-35 top-[20%] left-[80%] w-25 h-25 object-contain"
            />
            <img
              src="/flash.png"
              className="absolute opacity-45 bottom-[5%] left-[30%] w-24 h-24 object-contain animate-spin-slow"
            />
          </div>
          <div className="slide2 p-5 relative flex-shrink-0 w-full h-screen flex flex-col items-center justify-center ">
            <h1 className="text-5xl text-center md:text-7xl text-[var(--color-text)] font-black uppercase opacity-80">
              NO Added Sugars
            </h1>
            <h1 className="text-5xl text-center md:text-7xl text-[var(--color-text)] font-black uppercase opacity-80">
              0 mg
            </h1>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-5 max-w-xl mx-auto my-10">
              <div className="bg-yellow-500 text-[var(--color-text)] p-3 rounded-full text-2xl">
                <img className="w-35" src="/sugar.png" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text)]">
                  No Added Sugars. Just Pure Hydration.
                </h3>
                <p className="text-[var(--color-text)] opacity-80 mt-1">
                  FOKUS is completely free from added sugars—delivering clean,
                  effective hydration without unnecessary sweetness, empty
                  calories, or energy crashes.
                </p>
              </div>
            </div>
             <img
              src="/leaf.png"
              className="absolute opacity-30 top-[10%] left-[15%] w-20 h-20 object-contain"
            />
            <img
              src="/sugar-free.png"
              className="absolute opacity-40 bottom-[20%] right-[10%] w-28 h-28 object-contain"
            />
            <img
              src="/sugar-free (1).png"
              className="absolute opacity-35 top-[20%] left-[80%] w-25 h-25 object-contain"
            />
            <img
              src="/flash.png"
              className="absolute opacity-45 bottom-[5%] left-[30%] w-24 h-24 object-contain animate-spin-slow"
            />
          </div>
          <div className="slide3 p-5 relative flex-shrink-0 w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl text-center md:text-7xl text-[var(--color-text)] font-black uppercase opacity-80">
              Health Benefits
            </h1>
            <div className="mt-10 md:mt-0 flex flex-wrap items-center justify-around md:gap-6 gap-3 max-w-6xl mx-auto md:py-20 px-4">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl md:p-6 md:px-10 p-2 py-5 text-white flex flex-col items-center text-center transition-all duration-500 hover:scale-105"
                >
                  <div className="flex md:flex-col">
                    <div className="md:text-4xl text-xl md:mb-3 mb-2">{item.icon}</div>
                     <h3 className="md:text-xl text-md font-bold">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm md:mt-2 mt-0">{item.subtitle}</p>
                </div>
              ))}
            </div>
            <img
              src="/wellbeing.png"
              className="absolute opacity-30 top-[10%] left-[15%] w-20 h-20 object-contain"
            />
            <img
              src="/vitamin.png"
              className="absolute opacity-40 bottom-[20%] right-[10%] w-28 h-28 object-contain"
            />
            <img
              src="/coconut-drink.png"
              className="absolute opacity-35 top-[20%] right-[20%] w-16 h-16 object-contain"
            />
            <img
              src="/flash.png"
              className="absolute opacity-45 bottom-[5%] left-[30%] w-24 h-24 object-contain animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOffSection;
