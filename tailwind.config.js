/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9690f",
        headerColor: "#c4c4c4",
      },
    },
  },
  plugins: [],
};
