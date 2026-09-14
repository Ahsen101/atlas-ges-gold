import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        atlas: {
          50: '#fdf9eb',
          100: '#faf0c8',
          200: '#f5e08e',
          300: '#efc94d',
          400: '#d4a017',
          500: '#b8860b',
          600: '#9a6f09',
          700: '#7a560b',
          800: '#654510',
          900: '#553913',
          950: '#311e06',
        },
        earth: {
          50: '#faf8f5',
          100: '#f0ebe3',
          200: '#e0d5c5',
          300: '#ccb9a0',
          400: '#b89a7a',
          500: '#a98363',
          600: '#9c7157',
          700: '#825c49',
          800: '#6a4c3f',
          900: '#574035',
          950: '#2e211b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-left': 'fadeLeft 0.8s ease-out forwards',
        'fade-right': 'fadeRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
