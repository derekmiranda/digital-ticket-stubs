import {
  processViewingsFromDb,
  processViewingsFromClient,
  convertDbWatchtime,
  convertClientWatchtime
} from './processing'
import { authConfig } from './config'

export const fetchViewings = () => {
  return fetch(process.env.VIEWINGS_API_URL, authConfig)
    .then(res => res.json())
    .then(processViewingsFromDb)
}

export const updateViewing = viewing => {
  return updateViewings([viewing])
}

export const updateViewings = viewings => {
  const processedViewings = processViewingsFromClient(viewings)
  return fetch(process.env.VIEWINGS_API_URL, {
    ...authConfig,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(processedViewings)
  }).then(res => res.json())
}

export const saveNewViewing = viewing => {
  const processedViewing = convertClientWatchtime(viewing)
  return fetch(process.env.VIEWINGS_API_URL, {
    ...authConfig,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(processedViewing)
  }).then(res => res.json())
}

export const removeViewing = id => {
  return fetch(`${process.env.VIEWINGS_API_URL}/${id}`, {
    ...authConfig,
    method: 'DELETE'
  }).then(res => res.json())
}
