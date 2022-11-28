/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1450px",
        },
        padding: {
          DEFAULT: "2rem",
          sm: "1rem",
        },
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
