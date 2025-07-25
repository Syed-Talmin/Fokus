import { NavLink } from "react-router-dom";
import gsap from "gsap";

const NavItems = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/knowfokus" },
    { name: "Shop", path: "/product" },
    { name: "Cart", path: "/cart" },
  ];

  const handleHover = (e) => {
    const textDiv = e.currentTarget.querySelector(".navTextWrapper");
    gsap.to(textDiv, {
      y: "-50%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    const textDiv = e.currentTarget.querySelector(".navTextWrapper");
    gsap.to(textDiv, {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <nav className="w-full flex flex-col items-center justify-center gap-6 py-10">
      {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="relative group text-2xl font-bold uppercase tracking-wide"
          >
            {({ isActive }) => (
              <div
                className="h-[35px] w-fit overflow-hidden cursor-pointer"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <div className="navTextWrapper flex flex-col">
                  <span className="navText text-neutral-800">{item.name}</span>
                  <span className="navText text-neutral-800">{item.name}</span>
                </div>

                {isActive && (
                  <div className="absolute left-0 -bottom-1 h-[2px] w-full bg-black transition-all duration-300"></div>
                )}
              </div>
            )}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default NavItems;
