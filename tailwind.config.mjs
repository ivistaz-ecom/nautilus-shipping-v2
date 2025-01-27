/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00222F",
        secondary: "#008E9C",
      },
      fontFamily: {
        serif: ["Merriweathe", "serif"],
      },
    },
  },
  plugins: [],
}
