/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      colors: {
        "softOrange": "hsl(35, 77%, 62%)",
        "softRed": "hsl(5, 85%, 63%)",
        "offWhite": "hsl(36, 100%, 99%)",
        "grayishBlue": "hsl(233, 8%, 79%)",
        "darkGrayishBlue": "hsl(236, 13%, 42%)",
        "veryDarkBlue": "hsl(240, 100%, 5%)",
      },
      screens: {
        'max-sm': { 'max': '640px' },    // Up to 640px
        'max-md': { 'max': '768px' },    // Up to 768px
        'max-lg': { 'max': '1024px' },   // Up to 1024px
        'max-xl': { 'max': '1280px' },   // Up to 1280px
        'max-2xl': { 'max': '1536px' },  // Up to 1536px
      },
    },
  },
  plugins: [],
}

