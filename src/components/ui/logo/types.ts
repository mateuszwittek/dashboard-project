import { HTMLAttributes } from 'react';

export type LogoVariant = 'default' | 'minimal' | 'large';

export type LogoVariantStyles = Record<LogoVariant, string>;

export type LogoStyles = {
	base: string;
	variants: LogoVariantStyles;
	text: LogoVariantStyles;
};

export type LogoProps = {
	text: string;
	variant?: LogoVariant;
	asLink?: boolean;
	href?: string;
} & HTMLAttributes<HTMLDivElement | HTMLAnchorElement>;
