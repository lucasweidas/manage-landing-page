/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-be-vietnam-pro)',
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
    },
  },
  plugins: [],
};
