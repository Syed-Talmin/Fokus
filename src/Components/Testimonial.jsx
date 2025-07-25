import { FaQuoteLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(".tMCard", {
        x: "-50%",
        ease: "none",
        stagger: 5,
        duration: 4,
        scrollTrigger: {
          trigger: ".testimonial",
          start: "top center",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });
  }, []);

  const userReview = [
    {
      name: "Ashish Chanchlani",
      desc: "“Fokus—naam hi nahi, ek vibe hai! The branding, the taste, the whole energy of it is so addictive that it's effortlessly becoming my daily companion.”",
      img: "/ashishchanchlani.webp",
      bg: "bg-[#FFE5E5]",
    },
    {
      name: 'Tanmay "Scout"',
      desc: "“Being among the first to try Fokus, I knew from the first sip—this wasn’t just a drink; it was an experience! Now, I proudly say I’m its biggest fan.”",
      img: "/Scout.webp",
      bg: "bg-[#E6F4EA]",
    },
    {
      name: "Purav Jha",
      desc: "“Is 400ml ki bottle mein itni cheezein hai! Gym se lekar shoot tak, har jagah Fokus mera saath dega to keep me going all day long.”",
      img: "/purav_jha.webp",
      bg: "bg-[#FFF9DB]",
    },
    {
      name: "Aditya Rikhari",
      desc: "“Just like my songs, log Fokus ke fan hone wale hain! I absolutely love the strawberry watermelon flavour—it’s the perfect blend of taste!”",
      img: "/adityarikhari.jpg",
      bg: "bg-[#FFE5E5]",
    },
  ];

  return (
    <div className="w-full py-20 bg-[var(--color-bg)]">
      {/* Sticky Heading */}
      <div className="w-full h-[60vh] md:h-screen sticky top-0 flex items-center justify-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-[var(--color-text)] uppercase text-center opacity-60 leading-tight">
          Trusted by Athletes. <br className="hidden md:block" />
          Loved by All.
        </h1>
      </div>

      {/* Testimonials */}
      <div className="testimonial w-full flex flex-col items-end gap-20 relative z-10 px-4 md:px-0">
        {userReview.map((item, index) => (
          <div
            key={index}
            className={`tMCard w-full md:w-1/2 ${item.bg} rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8`}
          >
            <div className="flex-shrink-0">
              <img
                src={item.img}
                alt="Customer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-[var(--color-text)]"
              />
            </div>

            <div className="flex-1">
              <FaQuoteLeft className="text-2xl md:text-3xl text-[var(--color-text)] mb-3" />
              <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4">
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  {item.name}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
