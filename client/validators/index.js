export const isRequired = val => val ? undefined : 'Required';
export const emptyOrFilledWatchtime = wt => wt &&
	!(wt.month && wt.day && wt.year || !wt.month && !wt.day && !wt.year)
