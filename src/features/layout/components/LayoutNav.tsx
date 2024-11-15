import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { IconType } from '@/components/ui/icons/types';
import { cn } from '@/lib/utils/cn';
import { ROUTES } from '@/config/routes';
import { NavLink } from './NavLink';

type NavItem = {
	to: string;
	label: string;
	icon: IconType;
	end?: boolean;
};

type LayoutNavProps = {
	className?: string;
};

const navItems: NavItem[] = [
	{
		to: ROUTES.DASHBOARD,
		label: 'navigation.dashboard',
		icon: 'dashboard',
		end: true,
	},
	{ to: ROUTES.TASKS, label: 'navigation.tasks', icon: 'tasks' },
	{ to: ROUTES.PROJECTS, label: 'navigation.projects', icon: 'projects' },
] as const;

export const LayoutNav = ({ className }: LayoutNavProps): JSX.Element => {
	const { t } = useTranslation();

	const translatedNavItems = useMemo(
		() =>
			navItems.map((item) => ({
				...item,
				label: t(item.label),
			})),
		[t],
	);

	return (
		<nav
			className={cn('flex flex-col gap-2', className)}
			aria-label="Main navigation"
		>
			{translatedNavItems.map(({ to, label, icon, end }) => (
				<NavLink key={to} to={to} icon={icon} end={end}>
					{label}
				</NavLink>
			))}
		</nav>
	);
};
