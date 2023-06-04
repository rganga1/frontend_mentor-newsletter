/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        // roboto_bold:["./src/assets/fonts/Roboto-Bold.ttf"],
        // roboto_regular:["./src/assets/fonts/Roboto-Regular.ttf"],
        roboto_bold:["roboto_bold"],
        roboto_regular:["roboto_regular"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
