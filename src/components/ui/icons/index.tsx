import { memo } from 'react';
import { FolderKanban, LayoutDashboard, ListTodo } from 'lucide-react';
import { IconHamburger } from './IconHamburger';
import { ICON_TYPES } from './types';
import type { IconProps } from './types';

const iconMapping = {
	[ICON_TYPES.DASHBOARD]: LayoutDashboard,
	[ICON_TYPES.TASKS]: ListTodo,
	[ICON_TYPES.PROJECTS]: FolderKanban,
	[ICON_TYPES.HAMBURGER]: IconHamburger,
} as const;

export const Icon = memo(function Icon({
	type,
	className = 'h-4 w-4',
	...props
}: IconProps): JSX.Element {
	const IconElement = iconMapping[type];
	return (
		<IconElement type={type} className={className} aria-hidden {...props} />
	);
});
