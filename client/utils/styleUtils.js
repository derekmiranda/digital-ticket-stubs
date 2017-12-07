import curry from 'lodash/curry'

export const applyMediaQuery = curry((mediaQuery, styles) => {
	return `
		${mediaQuery} {
			${styles}
		}
	`
})

export const forMobile = applyMediaQuery('@media (max-width: 600px)')
export const forDesktop = applyMediaQuery('@media (min-width: 600px)')