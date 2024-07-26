/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      margin: {
        DEFAULT: "auto",
      },
    },
    extend: {
      width: {
        1240: "1240px",
        1116: "1116px",
      },
      maxWidth: {
        llg: "1116px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      // colors: {
      //   greey: "#B6B7BC",
      // },
    },
  },
  plugins: [],
};
