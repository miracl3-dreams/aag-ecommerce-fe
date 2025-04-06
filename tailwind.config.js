/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        secondary: "#E9B3C4",
        petal1: "#fbcfe8", // light pink
        petal2: "#f9a8d4", // rose
        petal3: "#e879f9", // fuchsia
        glow: "#ffffff",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #fff7ad, #ffa9f9)",
        "primary-gradient-light":
          "linear-gradient(90deg, rgba(255, 247, 173, 0.5), rgba(255, 169, 249, 0.5))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
