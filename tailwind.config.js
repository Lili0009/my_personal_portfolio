export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#050027",
        customBlue2: "#1D193C",
        customGray: "#948979",
        customPink: "#F7374F"
      },
      borderRadius: {
        '4xl': '500px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        jeju: ['"Jeju Gothic"', 'sans-serif'],
      },
      fontSize: {
        tiny: '20px',
      }
    },
  },
  plugins: [],
}
