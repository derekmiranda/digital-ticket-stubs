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
      if (Object.keys(errors || {}).length) throw errors
    })
}

export const submitUser = (user) => {
  const processedUser = processUserForDb(user)
  return fetch(`${process.env.USER_API_URL}/register`, {
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
    .then(res => res.json())
    .catch(err => {
      console.error(err)
      throw err
    })
}