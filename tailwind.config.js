/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: { heroBg: "url('/src/assets/images/heroBg.png')" },
			keyframes: {
				carousel: {
					"0%": { left: "-1100px" },
					"100%": { left: "1200px" },
				},
			},
			animation: {
				carousel: "carousel 20s linear infinite",
			},
		},
	},
	plugins: [],
};
