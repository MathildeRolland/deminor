import { useRef } from 'react';

import { StyledCell } from './CellComponents';

import { useSize } from '../../customHooks/useSize';

const Cell = () => {
	const cellRef = useRef();
	const cellSize = useSize(cellRef);

	return <StyledCell ref={cellRef} size={cellSize} />;
};

export default Cell;
