import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll during loader
    document.body.style.overflow = "hidden";

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress(count);
      if (count === 100) {
        clearInterval(interval);

        // Animate loader out
        gsap.to(".loader-wrapper", {
          opacity: 0,
          y: -50,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            document.body.style.overflow = "auto"; // Re-enable scroll
            onFinish();
          },
        });
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  return (
    <div className="loader-wrapper fixed inset-0 z-100 bg-[#FFF8DC] flex flex-col items-center justify-center text-neutral-800">
      <h1 className="text-5xl font-extrabold tracking-widest mb-4">FOKUS</h1>
      <p className="text-lg font-medium opacity-80">Loading... {progress}%</p>
    </div>
  );
};

export default Loader;
