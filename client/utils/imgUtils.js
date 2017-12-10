const { TMDB_IMG_URL, TMDB_THUMB_SIZE } = process.env

export const getThumbImg = (img) => `${TMDB_IMG_URL}/${TMDB_THUMB_SIZE}/${img}`