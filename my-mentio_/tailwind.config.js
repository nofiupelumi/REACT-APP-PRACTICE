/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-primary": "#fff",
        gray: {
          "100": "#1f1f1f",
          "200": "rgba(31, 31, 31, 0.12)",
        },
        black: "#000",
        "faint-blue": "#cdd2f6",
        lightsteelblue: "#b3b8de",
        darkslateblue: "#2e3788",
        gainsboro: "#ddd9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
