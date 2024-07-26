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
      backgroundColor: {
        "dark": "#0A0A0A",
        "darkLighter": "#121212",
        "menuIcon": "rgb(255, 255, 255, 0.05)",
        "menuHover": "#161717"
      },
      borderColor: {
        "menuIcon": "rgb(255, 255, 255, 0.1)",
        "dark": "#222222",
        "background": "#0A0A0A",
        "linkHover": "#424242"
      },
      boxShadow: {
        "buttonIdle": "inset 0px 3px 6px 0px rgb(255, 255, 255, 0.25)",
        "buttonHover": "inset 0px 1px 4px 0px rgb(255, 255, 255, 0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
