import { NavLink as RouterNavLink } from 'react-router-dom';
import type { IconType } from '@/components/ui/icons/types';
import { Icon } from '@/components/ui/icons';
import type { WithChildren } from '@/types/layout';
import { cn } from '@/lib/utils/cn';

type NavLinkProps = WithChildren<{
	to: string;
	icon: IconType;
	end?: boolean;
}>;

export const NavLink = ({
	children,
	to,
	icon,
	end = false,
}: NavLinkProps): JSX.Element => {
	return (
		<RouterNavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				cn(
					'group flex items-center gap-3 rounded-dashboard px-4 py-3',
					'transition-colors duration-200',
					isActive
						? 'bg-secondary text-foreground'
						: 'text-secondary-foreground hover:bg-secondary/50 hover:text-foreground',
				)
			}
		>
			{({ isActive }) => (
				<>
					<span className="flex h-5 w-5 items-center justify-center">
						<Icon
							type={icon}
							className={cn(
								'transition-colors duration-200',
								isActive
									? 'text-primary'
									: 'text-secondary-foreground group-hover:text-foreground',
							)}
						/>
					</span>
					{children}
				</>
			)}
		</RouterNavLink>
	);
};
