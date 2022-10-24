/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#205757",
        accent: "#6BFFF7",
        'primary-2': "#1C715A",
        'primary-3': "#2C8177",
        base: "#021213",
        'base-2': "#171B24",
        grey: "#9299A9",
        text: "#E0FEFE",
        'occean-1': "#3F9EE7",
        'occean-2': "#2FD1C3",
        'illustration-bg': "#50DBE0",

      },
      fontFamily: {
        walsheim: ["GT Walsheim Pro", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}
