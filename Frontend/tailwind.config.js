/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-slide-in',
    'animate-scale-up',
    'animate-rotate-bounce',
    'animate-hover-pulse',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#0067FF',
        yellowColor: '#FEB60D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5C5',
        headingColor: '#181A1E',
        textColor: '#4E545F',
      },
      boxShadow: {
        planeShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
            color: '#B63E96', // Start with color #B63E96 (Purple)
          },
          '50%': {
            transform: 'translateX(0)',
            opacity: 0.5, // Partially faded in
            color: '#FEB60D', // Transition to color #FEB60D (Yellow)
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1, // Fully visible
            color: '#007e69', // End with color #007e69 (Green)
          },},
          continuousScaleUp: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          },
          rotateAndBounce: {
            '0%': { transform: 'rotate(0deg) scale(0.8)', opacity: '0' },
            '40%': { transform: 'rotate(360deg) scale(1.2)', opacity: '1' },
            '60%': { transform: 'rotate(360deg) scale(0.95)' },
            '80%': { transform: 'rotate(360deg) scale(1.05)' },
            '100%': { transform: 'rotate(360deg) scale(1)' },
          },
          hoverPulse: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          }
        },
        animation: {
          'slide-in': 'slideIn 4s ease-out infinite',
          'scale-up': 'continuousScaleUp 4s ease-in-out infinite',
          'rotate-bounce': 'rotateAndBounce 4s ease-out infinite',
          'hover-pulse': 'hoverPulse 1s ease-in-out',
        }
      },
    },
    plugins: [],
  }
