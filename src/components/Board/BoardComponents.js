import styled from 'styled-components';

export const StyledBoard = styled.div`
	box-sizing: border-box;
	margin: 1rem auto;
	border: 0.5px solid blue;
	border-radius: 0.3em;
	max-width: 430px;
	display: grid;
	grid-template-columns: ${({ widthBasis }) => `repeat(${widthBasis}, 1fr)`};

	@media all and (min-width: 768px) {
		max-width: 95%;
		margin-top: 4rem;
	} ;
`;
