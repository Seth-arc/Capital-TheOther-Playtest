/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#026447',
        secondary: '#2A9D8F',
        tertiary: '#8ECABC',
      },
    },
  },
  plugins: [],
}
