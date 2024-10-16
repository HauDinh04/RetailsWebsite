import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
	// eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
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
                    fontWeight: "600",
                },
            ],
            "sub-heading": [
                "14px",
                {
                    lineHeight: "24px",
                },
            ],
            "sub-heading-bold": [
                "14px",
                {
                    lineHeight: "24px",
                    fontWeight:"600"
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
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
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
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
        }
    }
};
export default config;
