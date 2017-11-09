function watchtimeObjToISO(obj) {
  const { month, day, year } = obj;
  if (!month || !day || !year) {
    console.error('Incomplete watchtime');
    return;
  }
  return new Date(year, month, day).toISOString();
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
    watchtime: conversion(viewing.watchtime),
  }
}

const convertClientWatchtime = createViewingWatchtimeConverter(watchtimeObjToISO);
const convertDbWatchtime = createViewingWatchtimeConverter(watchtimeISOToObj);

export const processViewingsFromClient = (viewings) => {
  return viewings.map(convertClientWatchtime);
}

export const processViewingsFromDb = (viewings) => {
  return viewings.map(convertDbWatchtime);
}