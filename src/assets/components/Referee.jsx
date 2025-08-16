// src/components/Referee.jsx
import React from "react";
import { FaIdBadge } from "react-icons/fa";

const Referee = () => {
  return (
    <section className="relative h-[25vh]  flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <FaIdBadge className="text-white text-4xl md:text-5xl mx-auto mb-3 drop-shadow-md" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Referees
        </h2>
        <p className="mt-2 text-lg text-gray-300 italic">
          Available on request
        </p>
      </div>
    </section>
  );
};

export default Referee;
