import Board from '../../components/Board';
import Header from '../../components/Header';
import { useWindowSize } from '../../customHooks/useWindowSize';
import { StyledContainer } from './GameComponents';

const Game = () => {
	const windowSize = useWindowSize();

	return (
		<StyledContainer windowSize={windowSize}>
			<Header />
			<Board />
		</StyledContainer>
	);
};

export default Game;
