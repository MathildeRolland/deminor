import styled from 'styled-components';

export const StyledCell = styled.div`
	box-sizing: border-box;
	border: 0.5px solid blue;
	border-radius: 0.2rem;
	background-color: ${({ cell: { isBomb, isRevealed, isFlag } }) =>
		isBomb && isRevealed
			? 'red'
			: isFlag
			? 'blue'
			: isRevealed
			? '#ccc'
			: '#111'};
	height: ${({ size: { width } }) => width}px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ cell: { isFlag } }) => (!isFlag ? '#111' : 'transparent')};
	font-size: 1.5rem;
	user-select: none;
`;
