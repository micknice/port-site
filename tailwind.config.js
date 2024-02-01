/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ".public/assets/parallax/*.{png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountainsfg': " url(../public/assets/parallax/mountainsfg.png)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

