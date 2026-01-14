import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Chilexpress brand colors
        'chilexpress': {
          'blue': '#005A9C',        // Chilexpress primary blue
          'dark-blue': '#003A6B',   // Chilexpress dark blue
          'light-blue': '#3B82F6',  // Light blue for accents
          'yellow': '#FDB913',      // Chilexpress yellow/gold
          'light-yellow': '#FDD835',// Light yellow
          'red': '#E63946',         // Red accent
          'gray': '#F3F4F6',        // Light gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
