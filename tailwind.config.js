/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-green': '#126A25',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(39.1deg, #126A25 0.46%, #23D049 110.68%)',
        'custom-gradient-yellow':
          'linear-gradient(88.76deg, #D4AF37 1.13%, #F7AB3C 97.72%)',
      },
      boxShadow: {
        custom: '0px 2.7907px 13.9535px rgba(247, 176, 59, 0.5)',
      },
      spacing: {
        6.98: '6.98px',
        109.98: '109.98px',
        45: '45px',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
