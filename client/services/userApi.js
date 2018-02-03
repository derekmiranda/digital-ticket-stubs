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
    .catch(err => console.error(err))
    .then(errors => {
      if (Object.keys(errors || {}).length) throw errors
    })
}

export const submitUser = (user) => {
  const processedUser = processUserForDb(user)
  return fetch(`${process.env.USER_API_URL}/create`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(processedUser),
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => console.error(err))
}