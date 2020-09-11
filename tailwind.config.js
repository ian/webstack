module.exports = {
  // purge: [],
  theme: {
    extend: {
      colors: {
        "hint-of-green": "#ecf7f4",
        green: "#149778",
        "dark-green": "#0A2C2A",
      },
    },
    // colors: {
    //   white: "#fff",
    //   "hint-of-green": "#ecf7f4",
    //   green: "#149778",
    //   "dark-green": "#0A2C2A",
    //   // indigo: "#5c6ac4",
    //   // green: {
    //   //   500: "",
    //   // },
    //   // red: "#de3618",
    // },
  },
  // variants: {},
  plugins: [require("@tailwindcss/ui")],
}
