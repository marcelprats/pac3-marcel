/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,scss}"
  ],
  // Desactivem el preflight perquè no sobrescrigui els estils del Boilerplate
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "uoc-corporate": "#000078",
        "uoc-masterbrand": "#73edff",
        "uoc-accent": "#FFD600", // color accent personalitzat
      },
      fontFamily: {
        'uoc': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        // Breakpoints personalitzats
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.7s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}