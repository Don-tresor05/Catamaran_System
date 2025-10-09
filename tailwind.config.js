/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        dark: {
          8: '#131316',
          12: '#1C1C21',
        },
        grey: {
          70: '#AFB0B6',
        },
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
        },
        spacing: {
          '18': '4.5rem',
          '62': '15.5rem',
        },
      },
    },
  },
  plugins: [],
}

