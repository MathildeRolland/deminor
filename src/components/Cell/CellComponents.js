import styled from 'styled-components';

export const StyledCell = styled.div`
	box-sizing: border-box;
	border: 0.5px solid blue;
	border-radius: 0.2rem;
	background-color: ${(props) => (props.cell.isClicked ? '#111' : '#ccc')};
	height: ${(props) => props.size.width}px;
`;
