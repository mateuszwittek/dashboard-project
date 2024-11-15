import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HomeIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { ROUTES } from '@/config/routes';

export default function NotFoundPage(): JSX.Element {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleGoHome = () => {
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<div className="flex min-h-[calc(100vh-2.5rem)] items-center justify-center p-4">
			<div className="w-full max-w-md rounded-dashboard bg-card p-6 text-center shadow-lg md:p-8">
				<p className="text-6xl font-bold text-primary md:text-7xl lg:text-8xl">
					404
				</p>

				<h1 className="mt-6 text-xl font-bold text-card-foreground md:text-2xl">
					{t('error:notFound.title')}
				</h1>
				<p className="mt-4 text-secondary-foreground">
					{t('error:notFound.description')}
				</p>

				<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<button
						onClick={handleGoBack}
						className={cn(
							'flex min-w-[160px] items-center justify-center gap-2 rounded-dashboard',
							'bg-secondary px-6 py-2 text-secondary-foreground',
							'transition-colors duration-200',
							'hover:bg-secondary/80 hover:text-foreground',
							'focus-visible:outline-none focus-visible:ring-2',
							'focus-visible:ring-primary focus-visible:ring-offset-2',
						)}
					>
						<ArrowLeft className="h-4 w-4 flex-shrink-0" />
						{t('actions.goBack')}
					</button>

					<button
						onClick={handleGoHome}
						className={cn(
							'flex min-w-[160px] items-center justify-center gap-2 rounded-dashboard',
							'bg-primary px-6 py-2 text-primary-foreground',
							'transition-colors duration-200',
							'hover:bg-primary/90',
							'focus-visible:outline-none focus-visible:ring-2',
							'focus-visible:ring-primary focus-visible:ring-offset-2',
						)}
					>
						<HomeIcon className="h-4 w-4 flex-shrink-0" />
						{t('actions.goHome')}
					</button>
				</div>
			</div>
		</div>
	);
}
