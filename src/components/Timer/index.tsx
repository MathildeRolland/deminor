import { useEffect, useState } from 'react';

let interval: any;

const Timer: React.FunctionComponent = () => {
	const [count, setCount] = useState(0);

	const countDown = () => {
		setCount((count) => count + 1000);
	};

	const start = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (interval) {
			clearInterval(interval);
		}
		interval = setInterval(countDown, 1000);
	};

	const stop = () => {
		clearInterval(interval);
	};

	useEffect(() => {
		const initialTime = new Date();
		initialTime.setHours(0, 0, 0);

		setCount(initialTime.getTime());

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<button onClick={start}>start</button>
			{count ? (
				<p style={{ color: '#eee' }}>
					{new Date(count).toLocaleString().split(' ')[1]}
				</p>
			) : null}
			<button onClick={stop}>stop</button>
		</>
	);
};

export default Timer;
