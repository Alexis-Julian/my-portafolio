import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			phone: "375px",
			// => @media (min-width: 375px) { ... }

			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
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
			animation: {
				"fade-in-right": "fade-in-right 1s ease-in-out ",
			},

			keyframes: {
				curriculum: {
					"0%,100%": {
						transform: "translateX(100%)",
					},
				},
				"fade-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
			},
		},
	},
	plugins: [],
});
export default config;
