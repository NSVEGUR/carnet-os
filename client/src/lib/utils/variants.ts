export const springPop = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
			type: 'spring',
			delay: 0.2,
			stiffness: 60
		}
	},
	hidden: {
		opacity: 0,
		y: 1000
	}
};
