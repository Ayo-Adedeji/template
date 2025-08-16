import React from "react";

const Skills = () => {
  const softSkills = ["Teamwork", "Communication", "Adaptability", "Time Management"];
  const attributes = ["Leadership", "Problem Solving", "Creativity", "Critical Thinking"];
  const hobbies = ["Reading", "Traveling", "Music", "Sports"];

  return (
    <section id="skills" className="py-16 px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Skills & Interests
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {/* Soft Skills - Left */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Attributes - Center (imposing with shadow) */}
        <div className="text-center bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-purple-700 drop-shadow-md">Attributes</h3>
          <ul className="space-y-3 text-lg md:text-xl font-medium text-gray-800">
            {attributes.map((attr, index) => (
              <li key={index} className="drop-shadow-sm">{attr}</li>
            ))}
          </ul>
        </div>

        {/* Hobbies - Right */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Hobbies</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
