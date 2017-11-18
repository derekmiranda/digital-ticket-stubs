const normalizeBase = (normalizeFn) => (value, ...rest) => {
  const numberVal = ~~Number(value);
  if (value === '') {
    return value;
  }
  return normalizeFn(numberVal, ...rest);
}

export const normalizeMonth = normalizeBase((value) => {
  if (value >= 1 && value <= 12) {
    return ~~value;
  }
})

const isLeapYear = year => year % 4 === 0;
const getMaxDay = (watchtime, maxDayRef) => {
  const defaultMax = 31;
  if (!watchtime && !watchtime.month) {
    return defaultMax;
  }

  const { month, year } = watchtime;
  if (month === 2 && year && isLeapYear(year)) {
    return 29;
  }
  else {
    return maxDayRef[month] || defaultMax;
  } 
}

export const createDayNormalizer = (idx) => normalizeBase((value, prev, allValues) => {
  const viewing = allValues.viewings[idx];
  const { watchtime } = viewing;

  const min = 1;
  const max = getMaxDay(watchtime, {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31,
  }) || defaultMax;

  if (value >= min && value <= max) {
    return value;
  }
})

export const normalizeYear = normalizeBase((value) => {
  if (!isNaN(value) && value <= new Date().getFullYear()) {
    return value;
  }
})