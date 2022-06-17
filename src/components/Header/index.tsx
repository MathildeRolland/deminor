import Counter from '../Counter';
import Reset from '../Reset';
import Timer from '../Timer';

import { StyledHeader } from './HeaderComponents';

const Header = () => {
	return (
		<StyledHeader>
			<Counter />
			<Reset />
			<Timer />
		</StyledHeader>
	);
};

export default Header;
