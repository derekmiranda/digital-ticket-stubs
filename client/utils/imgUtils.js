import { thumbnailSize, ticketSize } from 'client/constants'

const { TMDB_IMG_URL } = process.env

export const getThumbImg = (img) => `${TMDB_IMG_URL}/${thumbnailSize}/${img}`
export const getTicketImg = (img) => `${TMDB_IMG_URL}/${ticketSize}/${img}`