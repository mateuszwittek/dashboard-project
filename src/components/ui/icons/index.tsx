import { memo } from 'react';
import { FolderKanban, LayoutDashboard, ListTodo } from 'lucide-react';
import type { IconMap, IconProps, IconComponent } from './types';

const iconMapping: IconMap = {
	dashboard: LayoutDashboard,
	tasks: ListTodo,
	projects: FolderKanban,
};

export const Icon = memo(function Icon({
	type,
	className = 'h-4 w-4',
	...props
}: IconProps): JSX.Element {
	const IconElement: IconComponent = iconMapping[type];

	return <IconElement className={className} aria-hidden {...props} />;
});
