import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
        keyframes: {
            remove: {
                to: {
                    transform: "translate(200vw)",
                },
            },
            "move-top": {
                to: {
                    transform: "translateY(-100%)",
                },
            },
        },

        animation: {
            remove: "remove 0.5s ease-in-out both",
            "move-top": "move-top 0.5s ease-in-out forwards",
        },
    },
    plugins: [],
} satisfies Config;
