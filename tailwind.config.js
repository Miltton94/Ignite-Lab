/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur.png)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
      screens: {
        lx: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        lg: { max: "769px" },
        // => @media (max-width: 767px) { ... }

        md: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        sm: { max: "449px" },
        // => @media (max-width: 449px) { ... }
      },
    },
  },
  plugins: [],
};

