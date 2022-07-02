import { SetStateAction } from 'react';
import { StyledSwitcher } from './ActionSwitcherComponent';

interface ActionSwitcherProps {
	action: number;
	setAction: React.Dispatch<SetStateAction<number>>;
}

const ActionSwitcher = ({ action, setAction }: ActionSwitcherProps) => {
	const onClick = () => {
		setAction(action === 0 ? 1 : 0);
	};

	return (
		<StyledSwitcher onClick={onClick} action={action}>
			Switch
		</StyledSwitcher>
	);
};

export default ActionSwitcher;
