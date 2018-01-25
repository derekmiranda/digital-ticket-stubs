export const checkUser = (user) => {
  return fetch(`${process.env.USER_API_URL}/check_user`, {
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