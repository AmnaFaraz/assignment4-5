/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',  // A nice blue
        secondary: '#F5A623', // A warm yellow
        accent: '#7ED321',    // A vibrant green
        dark: '#333333',      // Dark gray for text
        light: '#F2F2F2',     // Light gray for backgrounds
      },
    },
  },
  plugins: [],
}
