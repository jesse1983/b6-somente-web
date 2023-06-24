/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'system-ui'],
    },
    extend: {
      margin: {
        neo1: '-50vh',
        neo2: '-25vh',
      },
      height: {
        screen: 'calc(var(--vh, 1vh) * 100)',
      }
    }
    // colors: {
    //   secondary: '#00AEFF',
    // },
  },
  plugins: [],
}
