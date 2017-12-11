import curry from 'lodash/curry'

const mobileCutoff = 768;
const desktopCutoff = 1024;

export const applyMediaQuery = curry((mediaQuery, styles) => {
	return `
		${mediaQuery} {
			${styles}
		}
	`
})

export const forMobile = applyMediaQuery(`@media (max-width: ${mobileCutoff}px)`)
export const forTablet = applyMediaQuery(`@media (min-width: ${mobileCutoff}px) and (max-width: ${desktopCutoff}px)`)
export const forDesktop = applyMediaQuery(`@media (min-width: ${desktopCutoff}px)`)