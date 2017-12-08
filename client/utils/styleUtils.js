import curry from 'lodash/curry'

// based on iPhone 5 landscape width
const mobileCutoff = 568;

export const applyMediaQuery = curry((mediaQuery, styles) => {
	return `
		${mediaQuery} {
			${styles}
		}
	`
})

export const forMobile = applyMediaQuery(`@media (max-width: ${mobileCutoff}px)`)
export const forDesktop = applyMediaQuery(`@media (min-width: ${mobileCutoff}px)`)