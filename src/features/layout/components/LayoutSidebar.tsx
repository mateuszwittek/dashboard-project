import { cn } from '@/lib/utils/cn';
import { Logo } from '@/components/ui/logo';
import { LanguageSwitch } from '@/components/ui/language-switch';
import { LayoutNav } from './LayoutNav';

type LayoutSidebarProps = {
	className?: string;
};

export const LayoutSidebar = ({
	className,
}: LayoutSidebarProps): JSX.Element => {
	return (
		<aside
			className={cn(
				'flex h-screen w-[200px] flex-shrink-0 flex-col bg-sidebar p-5',
				className,
			)}
			aria-label="Sidebar"
		>
			<div className="flex flex-1 flex-col gap-8">
				<Logo text="TaskProject" />
				<LayoutNav />
			</div>

			<LanguageSwitch className="mt-auto grid w-full grid-cols-2 gap-2 pb-2" />
		</aside>
	);
};
