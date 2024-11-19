import { cn } from '@/lib/utils/cn';

type OverlayProps = {
	isVisible: boolean;
	onClose: () => void;
	className?: string;
};

export const Overlay = ({
	isVisible,
	onClose,
	className,
}: OverlayProps): JSX.Element => (
	<div
		className={cn(
			'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm',
			'transition-opacity duration-200',
			isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
			className,
		)}
		onClick={onClose}
		aria-hidden
	/>
);
