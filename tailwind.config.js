const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#a6e22e',
        'black-warm': '#0a0a0a',
        'black-deep': '#050505',
        'gray-950': '#0d0d0d',
      },
      fontFamily: {
        sans: ['var(--font-source-serif)'],
        display: ['var(--font-playfair-display)'],
      },
      boxShadow: {
        'dramatic': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'glow-accent': '0 0 40px rgba(166, 226, 46, 0.15)',
        'glow-accent-strong': '0 0 60px rgba(166, 226, 46, 0.25)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-vignette': 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
