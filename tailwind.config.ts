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
      'primary': {
        'bg': '#4880FF',
        'text': '#FFFFFF'
      },
      'secondary': {
        'bg': '#E2E2E2',
        'text': '#7E7E7E'
      },
      'danger': {
        'bg': '#FCD7D4',
        'text': '#EF3826'
      },
      'warning': {
        'bg': '#FFEDDD',
        'text': '#FFA756'
      },
      'success': {
        'bg': '#CCF0EB',
        'text': '#00B69B'
      },
    },
  },

  plugins: [],
};

export default config;
