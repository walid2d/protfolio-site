/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "375px",
      // => @media (min-width: 640px)

      tablet: "768px",
      // => @media (min-width: 768px)

      desktop: "1280px",
      // => @media (min-width: 1024px)
    },
  },
  plugins: [],
};
