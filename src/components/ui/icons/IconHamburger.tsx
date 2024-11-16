import { cn } from '@/lib/utils/cn';
import type { IconProps } from './types';

export const IconHamburger = ({
	type,
	isOpen,
	className,
	...props
}: IconProps): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			className={cn('h-4 w-4', className)}
			aria-hidden
			{...props}
		>
			<path
				className={cn(
					'origin-center transition-transform duration-200 ease-in-out',
					isOpen && 'translate-y-[7px] rotate-45',
				)}
				d="M4 6h16"
			/>
			<path
				className={cn(
					'transition-opacity duration-200 ease-in-out',
					isOpen && 'opacity-0',
				)}
				d="M4 12h16"
			/>
			<path
				className={cn(
					'origin-center transition-transform duration-200 ease-in-out',
					isOpen && 'translate-y-[-7px] -rotate-45',
				)}
				d="M4 18h16"
			/>
		</svg>
	);
};
