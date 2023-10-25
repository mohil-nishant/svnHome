/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'school-blue': '#0073e6', // Customize your school's brand color
      },
      fontFamily: {
        'school-font': ['Arial', 'sans'], // Customize your school's font
      },
    },
  },
  plugins: []
};