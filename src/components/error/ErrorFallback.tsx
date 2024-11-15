import { AlertCircle } from 'lucide-react';
import type { ErrorFallbackProps } from './types';
import { cn } from '@/lib/utils/cn';

export function ErrorFallback({
	error,
	resetErrorBoundary,
	title = 'Something went wrong',
	actionLabel = 'Try again',
	className,
}: ErrorFallbackProps): JSX.Element {
	return (
		<div
			className={cn(
				'rounded-dashboard bg-card p-5',
				'flex flex-col gap-4',
				className,
			)}
			role="alert"
		>
			<div className="flex items-center gap-2">
				<AlertCircle className="h-5 w-5 text-error" />
				<h2 className="text-xl font-bold text-card-foreground">{title}</h2>
			</div>

			<p className="text-secondary-foreground">
				{error.message || 'An unexpected error occurred'}
			</p>

			<button
				onClick={resetErrorBoundary}
				className={cn(
					'mt-2 rounded-dashboard bg-primary px-4 py-2',
					'text-primary-foreground hover:bg-primary/90',
					'focus-visible:outline-none focus-visible:ring-2',
					'focus-visible:ring-primary focus-visible:ring-offset-2',
				)}
			>
				{actionLabel}
			</button>
		</div>
	);
}
