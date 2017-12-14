export const isRequired = val => val ? undefined : 'Required';
export const emptyOrFilledWatchtime = wt => {
	const res = wt
		&& (
			(wt.month && wt.day && wt.year)
			|| (!wt.month && !wt.day && !wt.year)
		)
	return !!res
}
