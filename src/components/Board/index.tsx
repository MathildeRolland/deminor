import Cell from '../Cell';
import { StyledBoard } from './BoardComponents';

import { useWindowSize } from '../../customHooks/useWindowSize';
import { useEffect, useState } from 'react';

const Board = () => {
	const windowSize = useWindowSize();

	const widthBasis = windowSize.width < 768 ? 10 : 20;
	const cellsNumber = windowSize.width < 768 ? 200 : 300;

	return (
		<StyledBoard widthBasis={widthBasis}>
			{Array.from(Array(cellsNumber)).map((nb) => (
				<Cell key={nb} />
			))}
		</StyledBoard>
	);
};

export default Board;
