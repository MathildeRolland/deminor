import { useRef } from 'react';

import { StyledCell } from './CellComponents';

import { useSize } from '../../customHooks/useSize';

type CellType = {
	key: number;
	isBomb: boolean;
	isClicked: boolean;
};

interface CellProps {
	key: number;
	cell: { key: number; isBomb: boolean; isClicked: boolean };
	onClick: (cell: CellType) => void;
	bombsAround: number | undefined;
}

const Cell = ({ key, cell, onClick, bombsAround }: CellProps) => {
	const cellRef = useRef();
	const cellSize = useSize(cellRef);

	return (
		<StyledCell
			ref={cellRef}
			size={cellSize}
			cell={cell}
			onClick={() => onClick(cell)}
		>
			{bombsAround || ''}
		</StyledCell>
	);
};

export default Cell;
