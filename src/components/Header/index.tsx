import Counter from '../Counter';
import Reset from '../Reset';
import Timer from '../Timer';

import { StyledHeader } from './HeaderComponents';

interface HeaderProps {
	bombsCounter: number;
}
const Header = ({ bombsCounter }: HeaderProps) => {
	return (
		<StyledHeader>
			<Counter bombsCounter={bombsCounter} />
			<Reset />
			<Timer />
		</StyledHeader>
	);
};

export default Header;
