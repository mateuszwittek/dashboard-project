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
		},
	},
} as const;

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
