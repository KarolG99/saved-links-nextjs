/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#faf8ff",
        primaryBlue: "#0066ff",
        darkText: "#001085",
      },
    },
  },
  plugins: [],
};
