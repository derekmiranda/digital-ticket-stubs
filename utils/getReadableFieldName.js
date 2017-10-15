const capitalize = str => str[0].toUpperCase() + str.slice(1);

export default function getReadableFieldName(field) {
  if (field === 'watchtime') {
    return 'Watch Time';
  }
  return capitalize(field);
}