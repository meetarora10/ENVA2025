import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#6c210c] to-black text-white py-16">
      <div className="flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex gap-8 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#8B4513] text-white text-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#8B4513] text-white text-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#8B4513] text-white text-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-500"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Text */}
        <p style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-lg text-center">
          Copyright © 2025 | Made with{" "}
          <span className="text-red-500">❤️</span> by{" "}
          <span className="text-orange-500 font-bold">Team Prakriti</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;