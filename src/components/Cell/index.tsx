import { useRef } from 'react';

import { StyledCell } from './CellComponents';

import { useSize } from '../../customHooks/useSize';

interface CellProps {
	key: number;
	cell: { isBomb: boolean; isClicked: boolean };
}
const Cell = ({ key, cell }: CellProps) => {
	const cellRef = useRef();
	const cellSize = useSize(cellRef);

	return (
		<StyledCell
			ref={cellRef}
			size={cellSize}
			cell={cell}
			style={{ background: cell.isBomb ? 'red' : 'grey' }}
		/>
	);
};

export default Cell;
