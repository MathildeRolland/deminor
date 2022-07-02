import { SetStateAction, useEffect, useState } from 'react';

import Cell from '../Cell';
import { StyledBoard } from './BoardComponents';

import { useWindowSize } from '../../customHooks/useWindowSize';
import { getTouchingCells } from '../../utils/getTouchingCells';
import { randomBombsPlacement } from '../../utils/bombsPlacement';

interface BoardProps {
	bombsCounter: number;
	setBombsCounter: React.Dispatch<SetStateAction<number>>;
	action: number;
}

type CellType = {
	key: number;
	isBomb: boolean;
	isRevealed: boolean;
};

const Board = ({ bombsCounter, setBombsCounter, action }: BoardProps) => {
	const windowSize = useWindowSize();

	const [cells, setCells] = useState<CellType[]>([]);

	const widthBasis = windowSize.width < 768 ? 10 : 20;
	const cellsNumber = windowSize.width < 768 ? 200 : 300;

	const onClick = (cell: CellType): void => {
		if (action === 1) {
			const newCells = cells.map((c) =>
				c.key === cell.key && bombsCounter >= 0
					? { ...c, isFlag: true }
					: c
			);
			setBombsCounter(
				!cell.hasOwnProperty('isFlag') && bombsCounter > 0
					? bombsCounter - 1
					: bombsCounter
			);
			setCells(newCells);
		} else {
			const newCells = cells.map((c) =>
				c.key === cell.key ? { ...c, isRevealed: true } : c
			);
			setCells(newCells);
		}
	};

	const getNumberOfBombsAround = (
		cell: CellType,
		cellsNumberByRow: number
	): number | undefined => {
		if (!cell.isBomb) {
			const touchingCells = getTouchingCells(
				cells,
				cell,
				cellsNumberByRow
			);
			const numberOfBombsAround = touchingCells.filter(
				(c) => c && c.isBomb
			).length;
			return numberOfBombsAround;
		}
	};

	useEffect(() => {
		const initialCells = Array.from(Array(cellsNumber)).map((_, index) => ({
			key: index,
			isBomb: false,
			isRevealed: false,
		}));

		const newCells = randomBombsPlacement(initialCells, bombsCounter);
		setCells(newCells);
	}, [cellsNumber]);

	return (
		<StyledBoard widthBasis={widthBasis}>
			{cells.map((cell) => (
				<Cell
					key={cell.key}
					cell={cell}
					onClick={onClick}
					bombsAround={getNumberOfBombsAround(cell, widthBasis)}
				/>
			))}
		</StyledBoard>
	);
};

export default Board;
