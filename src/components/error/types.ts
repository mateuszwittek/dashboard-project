import type { FallbackProps } from 'react-error-boundary';

export type ErrorFallbackProps = FallbackProps & {
	title?: string;
	actionLabel?: string;
	className?: string;
};
