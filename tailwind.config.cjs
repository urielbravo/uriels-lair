/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        // gruvbox theme
        gruvboxDarkBg: '#271c19', 
        gruvboxLightBg: '#55423d',
        gruvboxTextColor: '#D5C4A1',
        gruvboxHoverTextColor: '#ebdbb2'
      }
    },
	},
	plugins: [],
}
