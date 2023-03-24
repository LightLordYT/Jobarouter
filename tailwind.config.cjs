/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"33%": "33%",
			},
		},
		screens: {
			phone: "390px",
		},
	},
	plugins: [],
}
