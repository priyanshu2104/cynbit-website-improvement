/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006067',
          container: '#007b83',
          fixed: '#96f1fa',
          'fixed-dim': '#7ad5dd',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#d0fbff',
          fixed: '#002022',
        },
        secondary: {
          DEFAULT: '#12629d',
          container: '#80bdfe',
          fixed: '#d0e4ff',
        },
        tertiary: {
          DEFAULT: '#774e00',
          container: '#986400',
          fixed: '#ffddb3',
        },
        'on-tertiary-fixed': '#291800',
        surface: {
          DEFAULT: '#f7fafa',
          variant: '#e0e3e3',
          container: '#ebeeee',
          'container-low': '#f1f4f4',
          'container-high': '#e6e9e9',
        },
        'on-surface': {
          DEFAULT: '#181c1d',
          variant: '#3e494a',
        },
        outline: {
          DEFAULT: '#6e797a',
          variant: '#bdc9ca',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        headline: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
