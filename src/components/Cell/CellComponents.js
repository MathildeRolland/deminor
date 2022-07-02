import styled from 'styled-components';

export const StyledCell = styled.div`
	box-sizing: border-box;
	border: 0.5px solid blue;
	border-radius: 0.2rem;
	background-color: ${(props) =>
		props.cell.isBomb && props.cell.isClicked
			? 'red'
			: props.cell.isClicked
			? '#ccc'
			: '#111'};
	height: ${(props) => props.size.width}px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #111;
	font-size: 1.5rem;
	user-select: none;
`;
