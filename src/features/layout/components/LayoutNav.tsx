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
	{ to: ROUTES.DASHBOARD, label: 'Dashboard', icon: 'dashboard', end: true },
	{ to: ROUTES.TASKS, label: 'Tasks', icon: 'tasks' },
	{ to: ROUTES.PROJECTS, label: 'Projects', icon: 'projects' },
] as const;

export const LayoutNav = ({ className }: LayoutNavProps): JSX.Element => {
	return (
		<nav
			className={cn('flex flex-col gap-2', className)}
			aria-label="Main navigation"
		>
			{navItems.map(({ to, label, icon, end }) => (
				<NavLink key={to} to={to} icon={icon} end={end}>
					{label}
				</NavLink>
			))}
		</nav>
	);
};
