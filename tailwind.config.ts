import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
      colors: {
        "spectreseek-background": "hsl(var(--spectreseek-background))",
        "spectreseek-foreground": "hsl(var(--spectreseek-foreground))",
        "spectreseek-muted": "hsl(var(--spectreseek-muted))",

        "alterok-background": "hsl(var(--alterok-background))",
        "alterok-foreground": "hsl(var(--alterok-foreground))",
        "alterok-muted": "hsl(var(--alterok-muted))",

        "gaudmire-background": "hsl(var(--gaudmire-background))",
        "gaudmire-foreground": "hsl(var(--gaudmire-foreground))",
        "gaudmire-muted": "hsl(var(--gaudmire-muted))",

        "erevald-background": "hsl(var(--erevald-background))",
        "erevald-foreground": "hsl(var(--erevald-foreground))",
        "erevald-muted": "hsl(var(--erevald-muted))",
      },
    },
  },
  plugins: [],
};
export default config;
