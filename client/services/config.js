export const authConfig = {
  credentials: process.env.NODE_ENV === 'production' ? 'same-origin' : 'include',
  mode: 'cors',
}