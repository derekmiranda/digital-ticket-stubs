import { getToken } from '../auth'

export const authConfig = {
  credentials: process.env.NODE_ENV === 'production' ? 'same-origin' : 'include',
  headers: {
    "Authorization": `Bearer ${getToken()}`
  }
}
