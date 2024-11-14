import type { LogoStyles } from './types';

export const styles: LogoStyles = {
	base: 'flex items-center justify-center',
	variants: {
		default: 'h-11 rounded-dashboard bg-primary',
		minimal: 'h-8 bg-transparent',
		large: 'h-14 rounded-dashboard bg-primary',
	},
	text: {
		default: 'font-bold text-primary-foreground',
		minimal: 'font-bold text-foreground',
		large: 'font-bold text-primary-foreground text-lg',
	},
} as const;
