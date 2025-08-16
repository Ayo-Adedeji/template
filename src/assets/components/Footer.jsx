import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      {/* Name */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">YourNAME</h2>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="text-pink-500 hover:text-pink-600 text-2xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-700 text-2xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-green-500 hover:text-green-600 text-2xl">
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mb-20 mt-20">
        © 2025 YourNAME. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
