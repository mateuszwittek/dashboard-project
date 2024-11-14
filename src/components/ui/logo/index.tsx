import { cn } from '@/lib/utils/cn';
import type { LogoProps } from './types';
import { styles } from './styles';

export const Logo = ({
	text,
	className,
	variant = 'default',
	asLink = true,
	href = '/',
}: LogoProps): JSX.Element => {
	const Wrapper = asLink ? 'a' : 'div';
	const baseProps = { role: 'banner' } as const;
	const linkProps = { ...baseProps, href } as const;

	return (
		<Wrapper
			className={cn(styles.base, styles.variants[variant], className)}
			{...(asLink ? linkProps : baseProps)}
		>
			<span className={styles.text[variant]}>{text}</span>
		</Wrapper>
	);
};
