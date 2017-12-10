function watchtimeObjToISO(obj) {
  const { month, day, year } = obj;
  return month && day && year && new Date(year, month - 1, day).toISOString();
}

function watchtimeISOToObj(iso) {
  const dateObj = new Date(iso);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return { month, day, year };
}

const createViewingWatchtimeConverter = (conversion) => (viewing) => {
  return {
    ...viewing,
    watchtime: viewing.watchtime && conversion(viewing.watchtime),
  }
}

export const convertClientWatchtime = createViewingWatchtimeConverter(watchtimeObjToISO);
export const convertDbWatchtime = createViewingWatchtimeConverter(watchtimeISOToObj);

const trimStrVals = (viewing) => ({
  ...viewing,
  title: viewing.title && viewing.title.trim(),
  venue: viewing.venue && viewing.venue.trim(),
})

export const processViewingsFromClient = (viewings) => {
  return viewings
    .map(convertClientWatchtime)
    .map(trimStrVals)
}

export const processViewingsFromDb = (viewings) => {
  return viewings.map(convertDbWatchtime);
}