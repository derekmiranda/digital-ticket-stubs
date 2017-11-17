import { 
  processViewingsFromDb, 
  processViewingsFromClient,
  convertDbWatchtime,
} from './processing';

export const fetchViewings = () => {
  return fetch(process.env.VIEWINGS_API_URL)
    .then(res => res.json())
    .then(processViewingsFromDb)
}

export const updateViewing = (viewing) => {
  return updateViewings([ viewing ]);
}

export const updateViewings = (viewings) => {
  const processedViewings = processViewingsFromClient(viewings);
  return fetch(process.env.VIEWINGS_API_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(processedViewings),
  })
    .then(res => res.json())
}

export const saveNewViewing = (viewing) => {
  return fetch(process.env.VIEWINGS_API_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(viewing),
  })
    .then(res => res.json())
}

export const removeViewing = (viewing) => {
  return fetch(`${process.env.VIEWINGS_API_URL}/${viewing.id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
}