import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1170px",
      },
    },
    fontSize: {
      heading1: [
        "22px",
        {
          lineHeight: "30px",
          fontWeight: "300",
        },
      ],
      "heading1-bold": [
        "22px",
        {
          lineHeight: "30px",
          fontWeight: "500",
        },
      ],
      heading2: [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "300",
        },
      ],
      "heading2-bold": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "500",
        },
      ],
      heading3: [
        "18px",
        {
          lineHeight: "20px",
          fontWeight: "300",
        },
      ],
      "heading3-bold": [
        "18px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      heading4: [
        "16px",
        {
          lineHeight: "18px",
          fontWeight: "300",
        },
      ],
      "heading4-bold": [
        "16px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
      "sub-heading": [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      caption: [
        "12px",
        {
          lineHeight: "40px",
        },
      ],
      info: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
    },
    extend: {
      colors: {
        "white-1": "#FFFFFF",
        "black-1": "#444444",
        "black-2": "#555555",
        "black-3": "#777777",
        "price-1": "#FF5555",
        "price-2": "#888888",
        "sub-nav": "#828282",
        "footer-info": "#CCCCCC",
        "bg-main": "#0083C1",
      },
    },
  },
  plugins: [],
};
export default config;
