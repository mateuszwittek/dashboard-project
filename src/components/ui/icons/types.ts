import type { ComponentProps } from 'react';
import type { LucideIcon } from 'lucide-react';

export type IconType = 'dashboard' | 'tasks' | 'projects';

export type IconComponent = LucideIcon;

export type IconMap = Record<IconType, IconComponent>;

export type IconProps = {
	type: IconType;
} & Omit<ComponentProps<IconComponent>, 'ref'>;
