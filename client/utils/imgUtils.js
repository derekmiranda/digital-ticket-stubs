import { thumbnailSize } from 'constants'

const { TMDB_IMG_URL } = process.env

export const getThumbImg = (img) => `${TMDB_IMG_URL}/${thumbnailSize}/${img}`