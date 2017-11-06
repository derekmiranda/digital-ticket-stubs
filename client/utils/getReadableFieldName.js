const capitalize = str => str[0].toUpperCase() + str.slice(1);

export default function getReadableFieldName(field) {
  const specialCases = {
    watchtime: 'Watch Time',
  }

  return specialCases[field] || capitalize(field);
}