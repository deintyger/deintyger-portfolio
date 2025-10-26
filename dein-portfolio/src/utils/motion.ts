import type { Variants } from 'framer-motion'

export const staggerContainer = (
	staggerChildren = 0.1,
	delayChildren = 0,
): Variants => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
})

export const fadeIn = (
	direction: 'left' | 'right' | 'up' | 'down' = 'up',
	type: 'tween' | 'spring' = 'tween',
	delay = 0,
	duration = 0.6,
): Variants => {
	const x = direction === 'left' ? 100 : direction === 'right' ? -100 : 0
	const y = direction === 'up' ? 20 : direction === 'down' ? -20 : 0

	return {
		hidden: { x, y, opacity: 0 },
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { type, delay, duration, ease: 'easeOut' },
		},
	}
}

export const textVariant = (delay = 0): Variants => ({
	hidden: { y: 20, opacity: 0 },
	show: { y: 0, opacity: 1, transition: { type: 'tween', delay, duration: 0.6 } },
})

