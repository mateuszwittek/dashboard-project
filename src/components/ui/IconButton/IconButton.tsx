import { Icon } from '@/components/ui/icons';
import { cn } from '@/lib/utils/cn';
import type { IconButtonProps } from './types';

export const IconButton = ({
	label,
	icon,
	onClick,
	className,
	iconClassName = 'h-4 w-4',
	...props
}: IconButtonProps): JSX.Element => (
	<button
		type="button"
		onClick={onClick}
		className={cn(
			'rounded-full p-2 text-secondary-foreground',
			'hover:bg-secondary hover:text-foreground',
			'focus-visible:outline-none focus-visible:ring-2',
			'focus-visible:ring-primary focus-visible:ring-offset-2',
			className,
		)}
		aria-label={label}
		{...props}
	>
		<Icon type={icon} className={iconClassName} />
	</button>
);
