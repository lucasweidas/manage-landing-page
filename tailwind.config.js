/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)'],
      },
      fontSize: {
        '2sm': '0.938rem',
        '3.5xl': '2rem',
      },
      colors: {
        red: {
          50: 'hsl(13, 100%, 96%)',
          500: 'hsl(12, 88%, 59%)',
        },
        blue: {
          900: 'hsl(228, 39%, 23%)',
          1000: 'hsl(233, 12%, 13%)',
        },
        gray: {
          400: 'hsl(227, 12%, 61%)',
        },
      },
      backgroundImage: {
        overlay:
          'linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1) 30%, hsla(0, 0%, 0%, 0.5))',
        'tablet-pattern': 'url("/images/bg-tablet-pattern.svg")',
      },
      content: {
        'simplify-sm': 'url("/images/bg-simplify-section-mobile.svg")',
        'simplify-lg': 'url("/images/bg-simplify-section-desktop.svg")',
      },
      width: {
        5.1: '1.313rem',
        6.1: '1.563rem',
        18: '4.5rem',
        36.2: '9.125rem',
        'min-lg': 'min(100% - 4rem, 69.5rem)',
      },
      height: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        18: '4.5rem',
      },
      margin: {
        18: '4.5rem',
      },
      screens: {
        xsm: '375px',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      flex: {
        'carousel-item': '1 0 100%',
      },
      grayscale: {
        20: '20%',
      },
      transitionProperty: {
        filter: 'filter',
      },
      animation: {
        'signed-up': 'signed-up 1000ms ease-in-out',
        'signed-up-reduce': 'signed-up-reduce 1000ms linear',
      },
      keyframes: {
        'signed-up': {
          '35%, 65%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          '100%': {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
          },
        },
        'signed-up-reduce': {
          '99%': {
            visibility: 'visible',
          },
          '100%': {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  plugins: [],
};
