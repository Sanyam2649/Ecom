/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#e74c3c",
        secondary:"#cb4335",
        brandY:"#f7dc6f",
        brandG:"#58d68d",
        brandW:"#f7f9f9",
        brandB:"#1F51FF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

