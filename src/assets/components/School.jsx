import React, { useState } from "react";
import GalleryModal from "./GalleryModal"; 
import logo from "../logo.jpg";
import certificate from "../certificate.jpg";
import work from "../work.jpg";
import work1 from "../work1.jpg";

const schools = [
  {
    name: "High School Name",
    years: "2008 - 2014",
    logo: logo,
    certificate: certificate,
    photos: [work, work1],
  },
  {
    name: "University Name",
    years: "2015 - 2019",
    logo: logo,
    certificate: certificate,
    photos: [work, work1],
  },
  {
    name: "Masters Program",
    years: "2020 - 2022",
    logo: logo,
    certificate: certificate,
    photos: [work, work1],
  },
  {
    name: "Extra Training",
    years: "2023",
    logo: logo,
    certificate: certificate,
    photos: [work, work1],
  },
];

const School = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photos) => {
    setSelectedPhotos(photos);
    setIsModalOpen(true);
  };

  return (
    <section className="p-10 bg-gradient-to-r from-primary-light/20 via-white to-accent-light/20">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary-dark drop-shadow-sm">
        Education Journey
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {schools.map((school, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-5 p-5 border border-primary/20 rounded-2xl"
          >
            <img
              src={school.logo}
              alt={school.name}
              className="w-16 h-16 object-contain drop-shadow-md"
            />

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-primary-dark">
                {school.name}
              </h3>
              <p className="text-neutral-dark text-sm">
                Year Attended: {school.years}
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href={school.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm shadow-sm hover:bg-primary-dark transition"
                >
                  View Certificate
                </a>
                <button
                  onClick={() => openModal(school.photos)}
                  className="border border-primary text-primary px-4 py-1.5 rounded-lg text-sm shadow-sm hover:bg-primary/10 transition"
                >
                  View Photos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={selectedPhotos}
        />
      )}
    </section>
  );
};

export default School;
