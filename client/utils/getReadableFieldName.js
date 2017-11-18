import { capitalize } from './general';

export default function getReadableFieldName(field) {
  const specialCases = {
    watchtime: 'Watch Time',
  }

  return specialCases[field] || capitalize(field);
}