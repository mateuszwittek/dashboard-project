import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/config/routes';
import { Layout } from '@/features/layout';
import { ErrorFallback } from '@/components/error';
import DashboardPage from '@/pages/dashboard';
import TasksPage from '@/pages/tasks';
import ProjectsPage from '@/pages/projects';
import NotFoundPage from '@/pages/not-found';

export default function App(): JSX.Element {
	const { t } = useTranslation();

	return (
		<ErrorBoundary
			FallbackComponent={(props) => (
				<ErrorFallback
					{...props}
					title={t('error.default.title')}
					actionLabel={t('error.default.action')}
				/>
			)}
			onReset={() => window.location.reload()}
		>
			<Layout>
				<Routes>
					<Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
					<Route path={ROUTES.TASKS} element={<TasksPage />} />
					<Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</ErrorBoundary>
	);
}
