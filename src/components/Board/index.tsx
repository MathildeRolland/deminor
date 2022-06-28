import { useEffect, useState } from 'react';

import Cell from '../Cell';
import { StyledBoard } from './BoardComponents';

import { useWindowSize } from '../../customHooks/useWindowSize';

interface BoardProps {
	bombsCounter: number;
}

type CellType = {
	key: number;
	isBomb: boolean;
	isClicked: boolean;
};

const Board = ({ bombsCounter }: BoardProps) => {
	const windowSize = useWindowSize();

	const [cells, setCells] = useState<CellType[]>([]);

	const widthBasis = windowSize.width < 768 ? 10 : 20;
	const cellsNumber = windowSize.width < 768 ? 200 : 300;

	const getRandomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const defineCellIsBomb = (cells: CellType[]) => {
		const randomNumber: number = getRandomNumber(0, cells.length);
		const relatedCell = cells[randomNumber];

		if (relatedCell && !relatedCell.isBomb) {
			relatedCell.isBomb = true;
		} else {
			defineCellIsBomb(cells);
		}
	};

	const randomBombsPlacement = (cells: CellType[], bombsCounter: number) => {
		for (let i = 0; i < bombsCounter; i++) {
			defineCellIsBomb(cells);
		}
		return cells;
	};

	const onClick = (cell: CellType): void => {
		const newCells = cells.map((c) => {
			return c.key === cell.key ? { ...c, isClicked: true } : c;
		});
		setCells(newCells);
	};

	useEffect(() => {
		const initialCells = Array.from(Array(cellsNumber)).map((_, index) => ({
			key: index,
			isBomb: false,
			isClicked: false,
		}));

		const newCells = randomBombsPlacement(initialCells, bombsCounter);
		setCells(newCells);
	}, [cellsNumber, bombsCounter]);

	return (
		<StyledBoard widthBasis={widthBasis}>
			{cells.map((cell) => (
				<Cell key={cell.key} cell={cell} onClick={onClick} />
			))}
		</StyledBoard>
	);
};

export default Board;
