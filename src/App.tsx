import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import { Layout } from '@/features/layout';

// Temporary page components until we create proper ones
const DashboardPage = (): JSX.Element => {
	return (
		<div className="rounded-dashboard bg-card p-5">
			<h1 className="text-xl font-bold text-card-foreground">Dashboard</h1>
			<p className="mt-2 text-secondary-foreground">Welcome to TaskFlow!</p>
		</div>
	);
};

const TasksPage = (): JSX.Element => {
	return (
		<div className="rounded-dashboard bg-card p-5">
			<h1 className="text-xl font-bold text-card-foreground">Tasks</h1>
			<p className="mt-2 text-secondary-foreground">
				Task management coming soon
			</p>
		</div>
	);
};

const ProjectsPage = (): JSX.Element => {
	return (
		<div className="rounded-dashboard bg-card p-5">
			<h1 className="text-xl font-bold text-card-foreground">Projects</h1>
			<p className="mt-2 text-secondary-foreground">
				Project management coming soon
			</p>
		</div>
	);
};

export default function App(): JSX.Element {
	return (
		<Layout>
			<Routes>
				<Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
				<Route path={ROUTES.TASKS} element={<TasksPage />} />
				<Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
			</Routes>
		</Layout>
	);
}
