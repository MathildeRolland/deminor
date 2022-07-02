import { getRandomNumber } from './getRandomNumber';

type CellType = {
	key: number;
	isBomb: boolean;
	isRevealed: boolean;
};

export const defineCellIsBomb = (cells: CellType[]) => {
	const randomNumber: number = getRandomNumber(0, cells.length);
	const relatedCell = cells[randomNumber];

	if (relatedCell && !relatedCell.isBomb) {
		relatedCell.isBomb = true;
	} else {
		defineCellIsBomb(cells);
	}
};

export const randomBombsPlacement = (
	cells: CellType[],
	bombsCounter: number
) => {
	for (let i = 0; i < bombsCounter; i++) {
		defineCellIsBomb(cells);
	}
	return cells;
};
