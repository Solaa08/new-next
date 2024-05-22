import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#FFFFFF',
      'dark': '#000000',
      'bg': "#F5F6FA",
      'primary': {
        'light' : '#85AAFF',
        DEFAULT: '#4880FF',
        'dark': '#244080'
      },
      'secondary': {
        'light' : '#EAEAEA',
        DEFAULT: '#C0C0C0',
        'dark': '#959595'
      },
      'danger': {
        '100': "#F6D5D5",
        '200': "#EDACAC",
        '300': "#E58282",
        '400' : '#DC5959',
        DEFAULT: '#D32F2F',
        '600': '#A92626',
        '700': "#7F1C1C",
        '800': "#541313",
        '900': "#2A0909",
      },
      'warning': {
        'light' : '#FFE2C7',
        DEFAULT: '#FFEDDD',
        'dark': '#FFA756'
      },
      'success': {
        'light' : '#AAE7DE',
        DEFAULT: '#CCF0EB',
        'dark': '#00B69B'
      },
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    }
  },

  plugins: [],
};

export default config;
