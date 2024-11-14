import { cn } from '@/lib/utils/cn';
import { Logo } from '@/components/ui/logo';
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
				'flex h-screen w-[200px] flex-shrink-0 flex-col gap-8 bg-sidebar p-5',
				className,
			)}
			aria-label="Sidebar"
		>
			<Logo text="TaskProject" />
			<LayoutNav />
		</aside>
	);
};
