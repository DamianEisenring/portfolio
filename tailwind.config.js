/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        schwingen_img: "url('/schwingen_img4.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
