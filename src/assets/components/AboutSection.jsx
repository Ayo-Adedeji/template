import React from "react";
import { User, Calendar, Heart, Flag, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section 
    id="about"
    className="p-10 bg-gradient-to-r from-primary-light/20 via-white to-accent-light/20">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary-dark drop-shadow-sm">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/20 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4 text-primary-dark">
            Profile
          </h3>
          <ul className="space-y-3 text-neutral-dark">
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-secondary/10 text-secondary">
                <User size={18} />
              </span>
              Gender: Male
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-secondary/10 text-secondary">
                <Calendar size={18} />
              </span>
              Date of Birth: Jan 1, 1995
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-secondary/10 text-secondary">
                <Heart size={18} />
              </span>
              Relationship: Single
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-secondary/10 text-secondary">
                <Flag size={18} />
              </span>
              Nationality: Nigerian
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-secondary/10 text-secondary">
                <Users size={18} />
              </span>
              Religion: Christianity
            </li>
          </ul>
        </div>

        {/* Objectives Card */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-secondary/20 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4 text-secondary-dark">
            Objectives
          </h3>
          <p className="text-neutral-dark leading-relaxed text-base md:text-lg">
            Passionate about building impactful software solutions. Seeking
            opportunities to contribute my skills in frontend development and
            problem-solving to create user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
