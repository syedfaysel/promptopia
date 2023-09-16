/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};
