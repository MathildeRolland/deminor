import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: ${(props) =>
		props.windowSize.width < 768
			? '100vw'
			: props.windowSize.width < 900
			? '75vw'
			: '50vw'};
	height: 100vh;
	margin: auto;
	background-color: #111;
`;
