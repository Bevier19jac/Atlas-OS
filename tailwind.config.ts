import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atlas: {
          ink: "#111827",
          navy: "#172033",
          charcoal: "#20242d",
          cloud: "#f6f7f9",
          line: "#d9dee7",
          green: "#2f7d66",
          amber: "#c98b32",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 24, 39, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
