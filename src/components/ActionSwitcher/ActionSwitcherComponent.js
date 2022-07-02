import styled from 'styled-components';

export const StyledSwitcher = styled.button`
	border-radius: 50%;
	background: ${({ action }) => (action === 0 ? 'red' : 'blue')};
	cursor: pointer;
`;
