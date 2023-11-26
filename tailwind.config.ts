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
        "hero-bg": "url('/home/heroBg.svg')",
      },
      colors: {
        primary: "#3898ec",
        secondary: "#fff",
        tertiary: "#8bc220",
        textColor: "#555",
        footerLinksColor: "#ffffffad",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      },
      boxShadow: {
        customShadow: "0 0 0.75rem #D3D3D3",
      },
    },
  },
  plugins: [],
};
export default config;
