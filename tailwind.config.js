/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB", // bright professional blue
          dark: "#1E3A8A",
          light: "#60A5FA",
        },
        accent: {
          DEFAULT: "#F59E0B", // warm amber/gold
          dark: "#B45309",
          light: "#FCD34D",
        },
        neutral: {
          light: "#F9FAFB",
          DEFAULT: "#6B7280", // gray-500
          dark: "#111827",
        },
      },
    },
  },
  plugins: [],
};
