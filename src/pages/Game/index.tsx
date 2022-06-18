import Board from '../../components/Board';
import Header from '../../components/Header';
import { StyledContainer } from './GameComponents';

const Game = () => {
	return (
		<StyledContainer>
			<Header />
			<Board />
		</StyledContainer>
	);
};

export default Game;
