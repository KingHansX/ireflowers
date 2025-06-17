module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#98D8C1',
        secondary: '#F8BBD0',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
} 