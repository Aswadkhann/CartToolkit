/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:['Nunito', 'sans-serif']
    },
    backgroundImage: {
      'no-repeat': "url('assets/img.png')",
    },

    backgroundRepeat: {
      'no-repeat': 'no-repeat',
    },
    backgroundPosition: {
      'no-repeat': 'center center',
    },
  },
  plugins: [],
}