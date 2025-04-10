/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'slide-in-text',
    'continuous-scale-text',
    'rotate-bounce',
    'hover-animate-text',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primaryColor: '#0067FF',
        yellowColor: '#FEB60D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5C5',
        headingColor : '#181A1E',
        textColor : '#4E545F',
      },

      boxShadow:{
        planeShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px",
        },
        keyframes: {
          slideIn: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          continuousScaleUp: {
            '0%, 100%': { transform: 'scale(1)', opacity: '1' },
            '50%': { transform: 'scale(1.1)', opacity: '1' },
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
          'slide-in': 'slideIn 3s ease-out infinite',
          'scale-up': 'continuousScaleUp 3s ease-in-out infinite',
          'rotate-bounce': 'rotateAndBounce 3s ease-out infinite',
          'hover-pulse': 'hoverPulse 0.6s ease-in-out',
        }



    },


  },
  plugins: [],
}

