/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    fontFamily: {
      primary: ['Yeseva One', 'cursive'],
      body: ['Jost', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'oxford-blue': '#0B132B',
        'turquoise-blue': '#6FFFE9',
        ruby: '#D81159',
        'helio-gray': '#A18C9E',
      },
      backgroundImage: {
        hero: "url('/output/img/lukas-blazek-f-TWhXOrLiU-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
