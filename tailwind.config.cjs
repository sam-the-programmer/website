/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "base": "#f5f5ef",
        "base-content": "#0d0d0d",
        "primary": "#276b18",
        "secondary": "#0CAAFC",
      },
      screens: {
        "mini": "275px",
        "tiny": "320px",
      }
    },
  },

  plugins: [],
};

module.exports = config;
