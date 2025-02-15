const flowbite = require("flowbite-react/tailwind")
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

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

  plugins: [
    flowbite.plugin(),
    addVariablesForColors,
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
      })
    },
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}
