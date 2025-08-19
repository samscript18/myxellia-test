import { Variants } from 'framer-motion';

export const opacityVariant: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 0.06 } },
	exit: { opacity: 0 },
};

export const newVariant: Variants = {
	initial: { opacity: 0, scale: 0 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: 'easeInOut',
			type: 'spring',
			damping: 15,
			duration: 0.5,
		},
	},
	exit: { opacity: 0, scale: 0 },
};
