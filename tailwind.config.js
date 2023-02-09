const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['var(--font-poppins)', ...fontFamily.sans]
			},
			colors: {
				primary: '#0f7bf1',
				'primary-dark': '#084a92',
				text: '#303030',
				'text-dark': '#000000',
				white: '#ffffff',
				'white-dark': '#cccccc',
				black: '#000000',
				'black-dark': '#000000',
				'ghost-white': '#f5f5f9',
				'ghost-white-dark': '#b5b5d3',
				gray: '#aeaeae',
				'gray-dark': '#7b7b7b',
				border: '#dbdce0',
				'border-dark': '#a4a7b1',
				input: '#f5f5f5',
				'input-dark': '#c2c2c2',
				alert: '#e9283a',
				'alert-dark': '#9b101d'
			},
			fontSize: {
				's-100': 'clamp(3.8rem, 3.57rem + 0.63vw, 4.2rem)',
				's-200': 'clamp(3.6rem, 3.49rem + 0.32vw, 3.8rem)',
				's-300': 'clamp(2.3rem, 2.19rem + 0.32vw, 2.5rem)',
				's-400': 'clamp(2rem, 1.89rem + 0.32vw, 2.2rem)',
				's-450': 'clamp(1.8rem, 1.89rem + 0.32vw, 2rem)',
				's-500': 'clamp(1.6rem, 1.49rem + 0.32vw, 1.8rem)',
				's-600': 'clamp(1.3rem, 1.29rem + 0.32vw, 1.5rem)'
			},
			keyframes: {
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(2rem)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scroll-down-fade': {
					'0%': {
						opacity: '1',
						top: '6px'
					},
					'50%': {
						opacity: '1',
						top: '12px'
					},
					'100%': {
						opacity: '0',
						top: '18px'
					}
				}
			},
			animation: {
				'fade-up': 'fade-up 1s ease forwards',
				'scroll-down-fade': 'scroll-down-fade 4s linear infinite'
			}
		}
	},
	plugins: []
};
