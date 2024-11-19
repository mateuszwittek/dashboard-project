import { Icon } from '@/components/ui/icons';
import type { ButtonHTMLAttributes } from 'react';
import { IconType } from '../icons/types';

type BaseButtonProps = {
	iconClassName?: string;
};

export type IconButtonProps = {
	icon: IconType;
	label: string;
} & BaseButtonProps &
	ButtonHTMLAttributes<HTMLButtonElement>;

export type HamburgerButtonProps = {
	isOpen: boolean;
	onToggle: () => void;
} & BaseButtonProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'>;
