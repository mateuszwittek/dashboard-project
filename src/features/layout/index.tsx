import type { WithChildren } from '@/types/layout';
import { LayoutSidebar } from './components/LayoutSidebar';

export const Layout = ({ children }: WithChildren): JSX.Element => {
	return (
		<div className="flex h-screen w-full bg-background">
			<LayoutSidebar />
			<main className="flex-1 overflow-auto p-5">{children}</main>
		</div>
	);
};
