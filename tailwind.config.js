import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#0A1018',
				foreground: '#FFFFFF',

				// UI elements
				card: {
					DEFAULT: '#111827',
					foreground: '#FFFFFF',
				},
				sidebar: {
					DEFAULT: '#111827',
					foreground: '#FFFFFF',
				},

				// Accents
				primary: {
					DEFAULT: '#3B82F6',
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#1E293B',
					foreground: '#94A3B8',
				},

				// Status colors
				success: {
					DEFAULT: '#22C55E',
					foreground: '#FFFFFF',
				},
				warning: {
					DEFAULT: '#F59E0B',
					foreground: '#FFFFFF',
				},
				error: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF',
				},
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			borderRadius: {
				dashboard: '12px',
			},
		},
		plugins: [],
	},
};
