/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#02c453"
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wipeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        wipeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        wipeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        pop:{
          '0%':{transform:'scale(0)'},
          '50%':{transform:'scale(1.3)'},
          '100%':{transform:'scale(1)'}
        }
      },
      animation: {
        fade: 'fade 1s ease-in-out',
        wipeRight: 'wipeRight 1s ease-in-out',
        wipeLeft: 'wipeLeft 1s ease-in-out',
        wipeDown: 'wipeDown 1s ease-in-out',
        pop:'pop 1s ease-in-out'
      },
    },
  },
  plugins: [],
}

