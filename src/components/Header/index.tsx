import { SetStateAction } from 'react';
import ActionSwitcher from '../ActionSwitcher/ActionSwitcher';
import Counter from '../Counter';
import Reset from '../Reset';
import Timer from '../Timer';

import { StyledHeader } from './HeaderComponents';

interface HeaderProps {
	bombsCounter: number;
	action: number;
	setAction: React.Dispatch<SetStateAction<number>>;
}

const Header = ({ bombsCounter, action, setAction }: HeaderProps) => {
	return (
		<StyledHeader>
			<Counter bombsCounter={bombsCounter} />
			<Reset />
			<ActionSwitcher action={action} setAction={setAction} />
			<Timer />
		</StyledHeader>
	);
};

export default Header;
