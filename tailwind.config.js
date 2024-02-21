/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('/src/assets/Home/footer.jpg')",
    }
  },
  plugins: [require("daisyui")],
}

