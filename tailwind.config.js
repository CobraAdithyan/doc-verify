module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'gov-blue': '#004d90',
          'gov-green': '#138808',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }