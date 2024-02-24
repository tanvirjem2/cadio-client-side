/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('/src/assets/Home/why choose us 2.jpg')",
    }
  },
  plugins: [require("daisyui")],
}

