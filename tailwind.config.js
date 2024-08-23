import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
        slide: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' },
        },
        fade:{
          '0%': { opacity: '0' , transform:'translatex(-4%)'},
          '100%': { opacity: 1 ,transform:'translateX(0)'},
        }
    },
    animation:{
      slide:'slide 10s infinite linear',
      fade:'fade 1s linear',
    },
    extend: {
      fontFamily:{
        sans:["Poppins", 'sans-serif'],
      },
      colors:{
        green:{
          darkest:'#02020220',
          dark:'#079649',
          bright:'#1ADC67',
        },
        slate:{
          dark:'#363836',
          light:'#A9ABA9',
        },
        transWhite:{
          medium:'#ffffff64',
          light:'#ffffff20'
        },
        black:{
          darkest:'#020202',
          dark:'#2E2E2E'
        }
      },
      spacing:{
        big:'9.375rem',
      },
      fontSize:{
        extraLarge:'4rem',
        xxs:'0.625rem'
      }
    }
  },
  plugins: [],
}

