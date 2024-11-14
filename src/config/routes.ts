export const ROUTES = {
	DASHBOARD: '/',
	TASKS: '/tasks',
	PROJECTS: '/projects',
} as const;

export type AppRoutes = (typeof ROUTES)[keyof typeof ROUTES];
