/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cfl: {
          green: "#2ECC71",
          greenDark: "#1F8F5A",
          black: "#0B0F0E",
          blackSoft: "#121917",
          text: "#E8F5EE",
          muted: "#8FAFA1",
        },
      },
    },
  },
  plugins: [],
};
