import { useTranslation } from 'react-i18next';
import { IconButton } from '../IconButton';
import { HamburgerButtonProps } from './types';

export const HamburgerButton = ({
	isOpen,
	onToggle,
	className,
	iconClassName,
	...props
}: HamburgerButtonProps): JSX.Element => {
	const { t } = useTranslation();

	return (
		<IconButton
			icon="hamburger"
			label={t('navigation.hamburger')}
			aria-expanded={isOpen}
			data-state={isOpen ? 'open' : 'closed'}
			onClick={onToggle}
			className={className}
			iconClassName={iconClassName}
			{...props}
		/>
	);
};
