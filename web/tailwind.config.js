/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#000000',
        'second': '#1E1F20',
        'mainText': '#FFFFFF',
        'secondText': '#CAC7C7',
        'input': '#D9D9D9'
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        secondHeading: ["Quantico", "sans-serif"],
      },
    },
  },
  plugins: [],
}

