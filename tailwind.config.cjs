/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "rgba(0,0,0,.5)",
        two: "#062226",
        title: "#441a22",
        subtitle: "#5e4045",
      },
      screens: {
        ssm: "min-width: 370px",
      },
    },
    plugins: [],
  },
};
