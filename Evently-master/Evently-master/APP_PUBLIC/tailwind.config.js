const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      main: "#0e6cff",
      ...colors,
    },
  },
  plugins: [],
};
