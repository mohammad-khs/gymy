/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mehranaOrange: "#ff7d00",
        mehranaBeige: "#ffcfa2",
        mehranaYellow: "#ffa308",
        mehranaDarkGray: "#485b7e",
        mehranaDarkBlue: "#1a1b41",
        mehranaGray: "#bfc4d1",
      },
    },
  },
  plugins: [],
};
