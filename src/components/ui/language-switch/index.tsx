import { useTranslation } from 'react-i18next';
import type { Language, LanguageSwitchProps } from './types';
import { cn } from '@/lib/utils/cn';

const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
	},
	{
		code: 'pl',
		name: 'Polski',
	},
] as const;

export function LanguageSwitch({
	className,
}: LanguageSwitchProps): JSX.Element {
	const { i18n } = useTranslation();

	return (
		<div className={cn('flex items-center gap-2', className)}>
			{languages.map(({ code, name }) => (
				<button
					className={cn(
						'rounded-dashboard px-3 py-1.5 text-sm font-medium',
						'transition-colors duration-200',
						'focus-visible:outline-none focus-visible:ring-2',
						'focus-visible:ring-primary focus-visible:ring-offset-2',
						i18n.language === code
							? 'bg-primary text-primary-foreground'
							: 'bg-secondary text-secondary-foreground hover:text-foreground',
					)}
					key={code}
					onClick={() => i18n.changeLanguage(code)}
				>
					{name}
				</button>
			))}
		</div>
	);
}
