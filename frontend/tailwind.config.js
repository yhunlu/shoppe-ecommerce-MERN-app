/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      sans: ['Mulish', 'sans-serif'],
      mono: ['Rokkitt', 'monospace'],
    },
    extend: {
      screens: {
        mf: '990px',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(120%)',
            transform: 'translateX(120%)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
      backgroundColor: {
        mainColor: '#0077B5',
        hovermainColor: '#00a4ef',
        secondaryColor: '#3d4f7c',
        hoversecondaryColor: '#263250',
        serviceOneColor: '#0064d3',
        serviceTwoColor: '#f4ae01',
        serviceThreeColor: '#88b719',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
