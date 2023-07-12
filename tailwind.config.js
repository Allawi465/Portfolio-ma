/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        darkGrey: '#A8A8A8',
        lightGray: '#57595F',
        gold: '#FCF9BF',
        lightGold: '#D1CF9F',
        lightDark: '#2B2B2B',
        lightblue: '#20779E',
        fade: '#ffffff00',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.125rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      width: {
        128: '32rem',
        132: '39rem',
      },
    },
  },
  plugins: [],
};
