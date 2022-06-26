import { useEffect, useState } from 'react';

export const useSize = (ref: any) => {
	const [size, setSize] = useState<any>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			if (ref.current) {
				let width = ref.current.offsetWidth;
				let height = ref.current.offsetHeight;
				setSize({ height, width });
			}
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [ref]);

	return size;
};
