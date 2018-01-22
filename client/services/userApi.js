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
    .then(json => {
      if (Object.keys(json)) throw json
    })
}