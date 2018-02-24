import { saveToken, getToken } from '../auth'
import { processUserForDb } from './processing'
import { authConfig } from './config'

export const checkUser = (user) => {
  return fetch(`${process.env.USER_API_URL}/check`, {
    ...authConfig,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .catch(err => {
      console.error(err)
      throw err
    })
    .then(errors => {
      if (errors && Object.keys(errors).length) throw errors
    })
}

const createUserSubmitFunc = (route) => (user) => {
  const processedUser = processUserForDb(user)
  return fetch(route, {
    ...authConfig,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(processedUser),
  })
    .catch(err => {
      console.error(err)
      throw err
    })
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        throw json
      }
      return json
    })
} 

export const submitUser = createUserSubmitFunc(`${process.env.USER_API_URL}/register`)
export const loginUser = createUserSubmitFunc(`${process.env.USER_API_URL}/login`)