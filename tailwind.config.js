/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'Tahoma',
          'Verdana',
          'Arial',
          'Helvetica',
          'Trebuchet MS',
          'Segoe UI',
          'Ubuntu', 
          'sans-serif',
        ],
      },
      colors: {
        mainColor: '#ce0251',
        secondaryColor: '#4E5B64',
        backgroundColor: '#F8F8F8'
      },
    },
  },
  plugins: [],
}

