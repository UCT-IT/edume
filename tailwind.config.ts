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
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/heroBg.svg')",
      },
      colors: {
        primary: "#3898ec",
        secondary: "#fff",
        tertiary: "#8bc220",
        buttonHoverd: "#5AA8EC",
        textColor: "#555",
        footerLinksColor: "#ffffffad",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
