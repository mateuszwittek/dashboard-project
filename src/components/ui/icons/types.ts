import type { ComponentProps } from 'react';
import type { LucideIcon } from 'lucide-react';

export const ICON_TYPES = {
	DASHBOARD: 'dashboard',
	TASKS: 'tasks',
	PROJECTS: 'projects',
	HAMBURGER: 'hamburger',
} as const;

export type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];

export type IconProps = {
	type: IconType;
} & Omit<ComponentProps<LucideIcon>, 'ref'>;

export type IconHamburgerProps = {
	isOpen?: boolean;
	className?: string;
	'data-state'?: 'open' | 'closed';
} & ComponentProps<'svg'>;
