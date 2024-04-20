/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue01': '#2F5CAB',
        'light-blue01': '#4379C8',
        'light-blue02': '#E2EDF9',
        'light-blue03': '#B6C8E9',
      }
    },
  },
  plugins: [],
}

