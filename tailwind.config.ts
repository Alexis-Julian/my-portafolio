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
			colors: {
				primary: "#332941",
				secondary: "#3B3486",
				tertiary: "#864AF9",
				quaternary: "#F8E559",
				quinary: "#1a1a1a",
			},
			keyframes: {
				curriculum: {
					"0%,100%": {
						transform: "translateX(100%)",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
