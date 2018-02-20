import { ACCESS_TOKEN } from '../constants'

export const isAuthenticated = () => !!getToken()

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN)
}

export function saveToken(token) {
  return localStorage.setItem(ACCESS_TOKEN, token)
}

export function clearToken() {
  return localStorage.removeItem(ACCESS_TOKEN)
}
