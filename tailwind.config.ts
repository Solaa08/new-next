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
      'primary': '#4880FF',
      'primary-text': '#FFFFFF',
      'secondary': '#E2E2E2',
      'secondary-text': '#7E7E7E',
      'danger': '#FCD7D4',
      'danger-text': '#EF3826',
      'warning': '#FFEDDD',
      'warning-text': '#FFA756',
      'success': '#CCF0EB',
      'success-text': '#00B69B',
    },
  },

  plugins: [],
};

export default config;
