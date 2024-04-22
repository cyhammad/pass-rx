/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2396F3",
        dark: "#121212",
        darkGray: "#202328",
        green: "#00A76F",
        error: "#FF472B",
        gray: "#637381",
        "light-gray":"#fafafa",
        "error-light": "#FF5630",
        "text-gray": "#9F9F9F",
        "text-gray-2": "#A1A5B7",
        "text-gray-dark": "#637381",
        "text-charcoal": "#3F4254",
        "text-white": "#FAFFFD",
        "text-yellow": "#F1C40F",
        "text-green": "#00DF80",
        "text-success": "#118D57",
        "table-button-green": "#18B668",
        "border-color": "#E9E9E9",
        "border-dark": "#4E4E4E",
        "table-header": "#F1F1F2",
      },
    },
  },
  plugins: [],
};
