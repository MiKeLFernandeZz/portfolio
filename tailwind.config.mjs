import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				secondary: {
					100: '#5bc0be',
				}
			},
			fontFamily: {
				montserrat: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
				onest: ["Onest Variable", ...defaultTheme.fontFamily.sans],
			},
			animation:{
				"background-shine": "background-shine 4s linear infinite"
			},
			keyframes:{
				"background-shine": {
					"from": {
					  "backgroundPosition": "0 0"
					},
					"to": {
					  "backgroundPosition": "-200% 0"
					}
				  }
			}
		},
	},
	plugins: [],
	
}
