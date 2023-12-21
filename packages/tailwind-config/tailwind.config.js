/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,tsx,jsx}",
        '../../packages/ui/**/*.{js,jsx,ts,tsx}',
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
  }