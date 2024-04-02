/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ct-dark-primary': '#04002A',
        'ct-dark-secondary': 'rgba(112, 125, 155, .05)',
        'ct-light-primary': '#ECEDF0',
        'ct-light-secondary': '#FAFAFA',
        'ct-card-dark': 'rgba(112, 125, 155, .1)',
        'ct-card-light': '#ffffff'
      },
      borderColor: {
        'ct-card': 'rgba(255, 255, 255, 0.1)'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

