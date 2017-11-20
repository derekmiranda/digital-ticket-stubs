// puts viewings saved on db at the top
const putItemsThatMeetCondFirst = (cond) => (i1, i2) => {
  if (cond(i1) && !cond(i2)) {
    return -1;
  } else if (cond(i2) && !cond(i1)) {
    return 1;
  }
  return 0;
}

export const putSavedViewingsFirst = putItemsThatMeetCondFirst(i => i.id);

const hasWatchtime = v => {
	const wt = v.watchtime;
  return wt && wt.month && wt.day && wt.year;
}
const watchtimeToMs = (watchtime) => {
  const { month, day, year } = watchtime;
  const timeMs = new Date(year, month - 1, day).getTime(); 
  return timeMs;
}
const sortByWatchtime = (v1, v2) => {
  // prioritizes items with a full watchtime object
  return (
    // put items with watchtime first
    putItemsThatMeetCondFirst(hasWatchtime)(v1, v2) ||
    // sort by time in ms if both viewings have full watchtimes
    (hasWatchtime(v1) && hasWatchtime(v2)
      ? watchtimeToMs(v1.watchtime) > watchtimeToMs(v2.watchtime)
      : 0)
  )
}

const createSortByStringAtKey = key => (o1, o2) => {
  const str1 = o1[key] && o1[key].toLowerCase();
	const str2 = o2[key] && o2[key].toLowerCase();
  return str1 > str2;
}

export const getSortByCriteria = (criteria) => {
  if (criteria === 'watchtime') {
    return sortByWatchtime;
  } else if (criteria === 'venue') {
    return (v1, v2) => {
			const itemsWithVenueFirst = putItemsThatMeetCondFirst(i => i[criteria])(v1,v2);
      return itemsWithVenueFirst || createSortByStringAtKey(criteria)(v1, v2);
    }
  }
  return createSortByStringAtKey(criteria || 'title');
}