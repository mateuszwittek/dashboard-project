import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		common: {
			navigation: {
				dashboard: 'Dashboard',
				tasks: 'Tasks',
				projects: 'Projects',
			},
			aria: {
				sidebar: 'Sidebar',
				mainNavigation: 'Main navigation',
			},
			actions: {
				tryAgain: 'Try again',
				goBack: 'Go Back',
				goHome: 'Go Home',
			},
		},
		error: {
			default: {
				title: 'Something went wrong',
				message: 'An unexpected error occurred',
			},
			navigation: {
				title: 'Navigation Error',
				action: 'Retry Loading Navigation',
			},
			notFound: {
				title: 'Page Not Found',
				description:
					"The page you are looking for doesn't exist or has been moved",
			},
		},
	},
	pl: {
		common: {
			navigation: {
				dashboard: 'Panel',
				tasks: 'Zadania',
				projects: 'Projekty',
			},
			aria: {
				sidebar: 'Panel boczny',
				mainNavigation: 'Nawigacja główna',
			},
			actions: {
				tryAgain: 'Spróbuj ponownie',
				goBack: 'Wróć',
				goHome: 'Strona główna',
			},
		},
		error: {
			default: {
				title: 'Coś poszło nie tak',
				message: 'Wystąpił nieoczekiwany błąd',
			},
			navigation: {
				title: 'Błąd nawigacji',
				action: 'Spróbuj załadować nawigację ponownie',
			},
			notFound: {
				title: 'Nie znaleziono strony',
				description:
					'Strona, której szukasz nie istnieje lub została przeniesiona',
			},
		},
	},
} as const;

type Resources = typeof resources;

// this ensures that keys are validated at compile time, preventing typos
declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'common';
		resources: Resources;
		returnNull: false;
	}
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		defaultNS: 'common',
		fallbackLng: 'en',
		supportedLngs: ['en', 'pl'],
	});

export default i18n;
