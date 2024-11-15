import type { ErrorFallbackProps } from './types';

export function ErrorFallback({
	error,
	resetErrorBoundary,
	title = 'Something went wrong',
	actionLabel = 'Try again',
	className,
}: ErrorFallbackProps): JSX.Element {
	return (
		<div role="alert">
			<p>{title}</p>
			<p>{error.message}</p>
			<button onClick={resetErrorBoundary}>{actionLabel}</button>
		</div>
	);
}
