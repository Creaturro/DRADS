import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA6AE',
        secondary: '#AB1E81',
        third: '#26323A',
        infographics: '#FFAD00',
        emphasize: '#FFDE5B',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xl1400': '1400px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    forms,
  ],
}; 