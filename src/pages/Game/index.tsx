import { useState } from 'react';

import Board from '../../components/Board';
import Header from '../../components/Header';
import { StyledContainer } from './GameComponents';

import { useWindowSize } from '../../customHooks/useWindowSize';

enum actionTypes {
	Bomb,
	Flag,
}

const Game = () => {
	const windowSize = useWindowSize();
	const [bombsCounter, setBombsCounter] = useState<number>(40);
	const [action, setAction] = useState<number>(actionTypes.Bomb);

	return (
		<StyledContainer windowSize={windowSize}>
			<Header
				bombsCounter={bombsCounter}
				action={action}
				setAction={setAction}
			/>
			<Board
				bombsCounter={bombsCounter}
				setBombsCounter={setBombsCounter}
				action={action}
			/>
		</StyledContainer>
	);
};

export default Game;
