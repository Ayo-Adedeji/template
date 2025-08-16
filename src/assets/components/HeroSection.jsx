import React from "react";
import profile from "../profile.jpg";

const HeroSection = () => {
  return (
    <section 
    id="home"
    className="flex flex-col md:flex-row items-center justify-center p-10 bg-gradient-to-r from-primary-light/40 via-neutral-light to-accent-light/40">
      {/* Left: Picture */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl mb-6 md:mb-0 md:mr-8 border-4 border-white/70">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Name + Buttons */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark drop-shadow-sm">
          Your Name
        </h1>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="/your-cv.pdf"
            download
            className="px-6 py-2.5 bg-primary text-white rounded-xl shadow-md hover:bg-primary-dark transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-accent text-white rounded-xl shadow-md hover:bg-accent-dark transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
