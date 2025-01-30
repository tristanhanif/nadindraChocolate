/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage : {
        "headers": "url('../folderAset/background.jpg')"
      }
    },
  },
  plugins: [],
}

