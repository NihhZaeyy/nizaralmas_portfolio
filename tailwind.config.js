import { CgDarkMode } from "react-icons/cg";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Poppins: "Poppins",
    },
    colors: {
      work: "#C0C0C0",
      borderLine: "#a6a6a6",
      button: "#a6a6a6",
      color: {
        dark: "#222222",
        black: "#000",
        white: "#fff",
        gray: "#444444",
      },
    },
  },
  plugins: [],
};
