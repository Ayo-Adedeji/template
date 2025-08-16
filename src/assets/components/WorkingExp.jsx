// src/components/WorkingExp.jsx
import React, { useState } from "react";
import GalleryModal from "./GalleryModal";
import logo from "../logo.jpg";

const experiences = [
  {
    company: "Company One",
    position: "Frontend Developer",
    years: "2020 - 2021",
    logo: logo,
    details: [
      "Developed responsive React websites.",
      "Optimized site speed and performance.",
      "Collaborated with UI/UX designers.",
      "Improved accessibility and SEO ranking.",
    ],
    photos: ["/exp1-1.jpg", "/exp1-2.jpg"],
  },
  {
    company: "Company Two",
    position: "UI/UX Designer",
    years: "2019 - 2020",
    logo: logo,
    details: [
      "Created wireframes and prototypes.",
      "Led design workshops with stakeholders.",
      "Designed mobile-first layouts.",
      "Ensured smooth developer handoff.",
    ],
    photos: ["/exp2-1.jpg", "/exp2-2.jpg"],
  },
  {
    company: "Company Three",
    position: "Intern - Software Engineer",
    years: "2018 - 2019",
    logo: logo,
    details: [
      "Assisted in building internal tools.",
      "Wrote technical documentation.",
      "Learned version control (Git).",
      "Participated in code reviews.",
    ],
    photos: ["/exp3-1.jpg", "/exp3-2.jpg"],
  },
  {
    company: "Company Four",
    position: "Freelance Web Developer",
    years: "2017 - 2018",
    logo: logo,
    details: [
      "Built websites for small businesses.",
      "Customized WordPress themes.",
      "Ensured responsive design.",
      "Integrated basic SEO practices.",
    ],
    photos: ["/exp4-1.jpg", "/exp4-2.jpg"],
  },
];

const WorkingExp = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photos) => {
    setSelectedPhotos(photos);
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="p-10 bg-neutral-light">
      <h2 className="text-2xl font-bold mb-8 text-center text-primary-dark">
        Work Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="shadow-md p-6 border rounded-lg bg-white flex flex-col gap-3"
          >
            {/* Logo + Info */}
            <div className="flex items-center gap-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <p className="text-primary">{exp.position}</p>
                <p className="text-gray-500 text-sm">{exp.years}</p>
              </div>
            </div>

            {/* What I did */}
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => openModal(exp.photos)}
              className="mt-3 border border-blue-600 text-blue-600 px-4 py-1 rounded-xl text-sm shadow-sm hover:bg-blue-50 self-start"
            >
              View Photos
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={selectedPhotos}
      />
    </section>
  );
};

export default WorkingExp;
