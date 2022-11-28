/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "450px" },
        sm: { max: "723px" },
        md: { min: "724px", max: "1023px" },
        xm: { min: "1024px", max: "1279px" },
        xxl: { min: "2048px" },
      },
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
