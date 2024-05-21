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
      'dark': '#00000',
      'primary': {
        'light' : '#85AAFF',
        DEFAULT: '#4880FF',
        'dark': '#244080'
      },
      'secondary': {
        'light' : '#D4D4D4',
        DEFAULT: '#E2E2E2',
        'dark': '#7E7E7E'
      },
      'danger': {
        'light' : '#FABDB7',
        DEFAULT: '#FCD7D4',
        'dark': '#EF3826'
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
  },

  plugins: [],
};

export default config;
