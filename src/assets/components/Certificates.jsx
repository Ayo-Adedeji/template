// src/components/Certificates.jsx
import React from "react";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    year: "2023",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    year: "2021",
  },
  {
    title: "Scrum Master Certified",
    issuer: "Scrum Alliance",
    year: "2020",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative h-[75vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
      {/* Overlay */}
      <div className=" absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-6xl px-6">
        <h2 className=" text-2xl md:text-3xl font-bold text-center mb-6">
          Certificates
        </h2>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <FaCertificate className="text-yellow-400 text-4xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-200">{cert.issuer}</p>
              <p className="text-xs text-gray-300 mt-1">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
