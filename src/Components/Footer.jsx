import React from "react";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white px-6 md:px-8 py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-10 items-start">

        <div className="flex flex-col items-start gap-4 w-full md:w-auto">
          <img
            src="/logo.avif"
            alt="FOKUS Logo"
            className="w-28 md:w-32 h-auto bg-amber-50"
          />
          <p className="text-sm text-gray-400">
            Science-backed hydration for everyday performance.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Health Benefits</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto">
          <h4 className="text-lg font-semibold text-white">Connect</h4>
          <div className="flex items-center gap-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="mailto:support@fokus.shop" className="hover:text-white"><FaEnvelope /></a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            &copy; 2025 FOKUS. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
