/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'alike': ['Alike', 'sans-serif'],
        'raleway':['Raleway','sans-serif'],
        'mono' : ['Space Mono', 'sans-serif']
      },

      colors:{
        'primary':'#7D828E',
        'header': '#4B5563',
        'focus':'#f2f2f2',
        'listf': '#f9f9f9',
        'hash' : '#d0d0d0'
      },

      
    },
  },
  plugins: [],
}
