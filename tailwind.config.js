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
        customWhite: '#FFFFFF',
        mainHeader: '#292B36',
        locationP: '#A8A9AE',
      },
      fontSize: {
        '19': '19px',
        '17': '17px',
      },
      fontWeight: {
        '500': 500,
        '400': 400,
      },
      lineHeight: {
        '24': '24px',
        '22': '22px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
