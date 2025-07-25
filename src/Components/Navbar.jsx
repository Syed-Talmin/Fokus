import { useState } from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import NavItems from "./NavItems";
import { useEffect } from "react";
import { applyMagneticEffect } from "../utils/magneticEffect";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic-btn");
    const cleanup = applyMagneticEffect(buttons, 0.35);

    return cleanup;
  }, []);

  return (
    <div className="fixed z-99 w-screen max-w-xl top-0 md:left-1/2 md:-translate-x-1/2 bg-[var(--color-bg)] border border-black/30 rounded-xl shadow-lg py-2 pb-0 px-5">
      <div className="flex items-center justify-between border-b-1 border-black/30 pb-2">
        <div
          onClick={() => setShowNavItems(!showNavItems)}
          className="magnetic-btn left text-2xl font-bold cursor-pointer hover:bg-black hover:text-white p-2 rounded-full"
        >
          {showNavItems ? <RxCross2 /> : <FiMenu />}
        </div>
        <div className="center">
          <img className="h-10" src="/logo.avif" alt="" />
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="text-sm px-5 font-bold py-2 hover:bg-black hover:text-white rounded-md border border-black transition ease-in-out duration-300"
          >
            LOG IN
          </Link>
          <div
            onClick={() => navigate("/cart")}
            className="magnetic-btn right flex gap-5 cursor-pointer hover:bg-black hover:text-white p-2 rounded-full  h-full  font-black"
          >
            {!showNavItems && <FiShoppingCart size={20} />}
          </div>
        </div>
      </div>
      <div
        className={`${
          showNavItems ? "h-[40vh]" : "h-0"
        } overflow-hidden transition-all ease-in-out duration-300`}
      >
        {showNavItems && <NavItems />}
      </div>
    </div>
  );
};

export default Navbar;
