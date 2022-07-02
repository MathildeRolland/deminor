type CellType = {
	key: number;
	isBomb: boolean;
	isRevealed: boolean;
};

export const getTouchingCells = (
	arr: CellType[],
	cell: CellType,
	nbPerRow: number
) => {
	return [
		arr[cell.key + 1],
		arr[cell.key - 1],
		arr[cell.key + nbPerRow],
		arr[cell.key - nbPerRow],
		arr[cell.key + nbPerRow + 1],
		arr[cell.key - nbPerRow + 1],
		arr[cell.key + nbPerRow - 1],
		arr[cell.key - nbPerRow - 1],
	];
};
