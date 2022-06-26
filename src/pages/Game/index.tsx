import { useState } from 'react';

import Board from '../../components/Board';
import Header from '../../components/Header';
import { StyledContainer } from './GameComponents';

import { useWindowSize } from '../../customHooks/useWindowSize';

const Game = () => {
	const windowSize = useWindowSize();
	const [bombsCounter, setBombsCounter] = useState<number>(40);

	return (
		<StyledContainer windowSize={windowSize}>
			<Header bombsCounter={bombsCounter} />
			<Board />
		</StyledContainer>
	);
};

export default Game;
