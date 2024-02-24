/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Small screens, such as mobile phones
        'md': '768px',  // Medium screens, such as tablets
        'lg': '1024px', // Large screens, such as laptops
        'xl': '1280px', // Extra large screens, such as desktops
      },
    },
  },
  plugins: [],
};