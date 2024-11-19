import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils/cn';
import { ROUTES } from '@/config/routes';
import type { IconType } from '@/components/ui/icons/types';
import { NavLink } from './NavLink';

type LayoutNavProps = {
	className?: string;
};

type NavItem = {
	to: string;
	labelKey: string;
	icon: IconType;
	end?: boolean;
};

const NAV_ITEMS: NavItem[] = [
	{
		to: ROUTES.DASHBOARD,
		icon: 'dashboard',
		labelKey: 'navigation.dashboard',
		end: true,
	},
	{
		to: ROUTES.TASKS,
		icon: 'tasks',
		labelKey: 'navigation.tasks',
	},
	{
		to: ROUTES.PROJECTS,
		icon: 'projects',
		labelKey: 'navigation.projects',
	},
] as const;

export function LayoutNav({ className }: LayoutNavProps): JSX.Element {
	const { t } = useTranslation();

	return (
		<nav
			className={cn('flex flex-col gap-2', className)}
			aria-label={t('aria.mainNavigation')}
		>
			{NAV_ITEMS.map(({ to, icon, labelKey, end }) => (
				<NavLink key={to} to={to} icon={icon} end={end}>
					{t(labelKey)}
				</NavLink>
			))}
		</nav>
	);
}
