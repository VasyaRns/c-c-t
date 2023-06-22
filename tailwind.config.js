/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gradientColorStops: {
      '0': '#FFFFFF',
      '43': '#DCDEE0',
      '58': '#DEDFE1',
      '100': '#FFFFFF',
    },

    extend: {
      colors: {
        blue: '#004BDB',
      },
    },
  },
  plugins: [],
}
