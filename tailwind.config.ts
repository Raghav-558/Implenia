import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "770px",
      },
      colors: {
        "custom-orange": "#EBA82C",
        "custom-black": "#1D1D1B",
        "custom-red": "#FF132D",
        "custom-gray": "#F5F5F5",
        "custom-yellow": "#F3B72C",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/webp/hero-bg.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
