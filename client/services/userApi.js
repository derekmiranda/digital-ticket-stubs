import { processUserForDb } from './processing'
export const checkUser = (user) => {
  return fetch(`${process.env.USER_API_URL}/check`, {
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
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(processedUser),
    credentials: process.env.NODE_ENV === 'production'
      ? 'same-origin'
      : 'include',
  })
    .catch(err => {
      console.error(err)
      throw err
    })
    .then(res => {
      console.log(res)
      if (res.ok) {
        return res.statusText
      }
      throw res.statusText
    })
} 

export const submitUser = createUserSubmitFunc(`${process.env.USER_API_URL}/register`)
export const loginUser = createUserSubmitFunc(`${process.env.USER_API_URL}/login`)