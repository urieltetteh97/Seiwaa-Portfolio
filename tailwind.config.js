/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      fontWeight: {
        heading: '700',
        body: '400',
      },
      colors: {
        // Core palette — editorial dark-luxury
        ink: '#0D0D0D',         // near-black background
        canvas: '#F5F0EB',      // warm off-white text / surface
        mist: '#C9BFB3',        // muted mid-tone
        accent: '#C8A97E',      // warm gold accent
        'accent-dark': '#A8855A',
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
    },
  },
  plugins: [],
}
