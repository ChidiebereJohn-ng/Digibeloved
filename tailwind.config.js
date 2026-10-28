/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#092755',
        accent: '#FDD412',
        'navy-light': '#0D3470',
        'brand-navy': '#092755',
        'brand-yellow': '#FDD412',
        'brand-ice': '#EEF3FB',
        ice: '#EEF3FB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
