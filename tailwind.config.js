/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          50: '#007CF0',
          100: '#00DFD8'
        }
      },
      plugins: [
        require('flowbite/plugin')
      ]
    }
  }
}
