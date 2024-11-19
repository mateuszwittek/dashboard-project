import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils/cn';
import { Logo } from '@/components/ui/logo';
import { LanguageSwitch } from '@/components/ui/language-switch';
import { HamburgerButton } from '@/components/ui/IconButton';
import { Overlay } from '@/components/ui/overlay';
import { LayoutNav } from './LayoutNav';

type LayoutSidebarProps = {
	className?: string;
};

export function LayoutSidebar({ className }: LayoutSidebarProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<>
			<header className="fixed top-0 z-20 flex h-16 w-full items-center justify-between bg-sidebar px-4 md:hidden">
				<Logo text="TaskProject" variant="minimal" className="h-8" />
				<HamburgerButton
					isOpen={isOpen}
					onToggle={() => setIsOpen(!isOpen)}
					aria-controls="primary-navigation"
					aria-expanded={isOpen}
					aria-label={t('navigation.toggleMenu')}
				/>
			</header>

			<Overlay
				isVisible={isOpen}
				onClose={() => setIsOpen(false)}
				className="md:hidden"
			/>

			<aside
				className={cn(
					'flex flex-col bg-sidebar',
					'fixed inset-y-0 left-0 z-50 w-[280px]',
					'transition-transform duration-300 ease-in-out',
					isOpen ? 'translate-x-0' : '-translate-x-full',
					'md:static md:h-screen md:w-[200px] md:translate-x-0',
					className,
				)}
				aria-label="Sidebar"
			>
				<div className="flex flex-1 flex-col gap-8 p-5">
					<Logo text="TaskProject" />
					<LayoutNav />
				</div>

				<LanguageSwitch className="mt-auto grid w-full grid-cols-2 gap-2 p-5 pb-2" />
			</aside>
		</>
	);
}
