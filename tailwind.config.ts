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
				primary: "#332941" /* 1 */,
				secondary: "#3B3486" /* 2 */,
				tertiary: "#864AF9" /* 3 */,
				quaternary: "#F8E559" /* 4  Amarillo */,
				quinary: "#1a1a1a" /* 5 Negro */,
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
