/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          primary: "#111827",
          accent: "#C5A572",
          ivory: "#FFFAF2",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
