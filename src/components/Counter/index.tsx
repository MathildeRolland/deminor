import { StyledCounter } from './CounterComponents';

interface CounterProps {
	bombsCounter: number;
}

const Counter = ({ bombsCounter }: CounterProps) => {
	return <StyledCounter>{bombsCounter}</StyledCounter>;
};

export default Counter;
