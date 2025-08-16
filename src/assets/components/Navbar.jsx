import React from "react";
import { Home, User, Briefcase, Award, BookOpen, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg z-50">
      <ul className="flex justify-around items-center gap-4 sm:gap-8">
        {[
          { icon: <Home size={20} />, label: "Home", href: "#home" },
          { icon: <User size={20} />, label: "About", href: "#about" },
          { icon: <Briefcase size={20} />, label: "Work", href: "#work" },
          { icon: <Award size={20} />, label: "Certificates", href: "#certificates" },
          { icon: <BookOpen size={20} />, label: "Skills", href: "#skills" },
          { icon: <Phone size={20} />, label: "Contact", href: "#contact" },
        ].map((item, index) => (
          <li key={index} className="flex flex-col items-center text-xs sm:text-sm">
            <a
              href={item.href}
              className="flex flex-col items-center text-primary-dark hover:text-primary transition"
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
