import React from 'react';

function createOptionsRangeFn(endCond, changeToFirst) {
	return function optionRangeFn(first, last, label, prevOpts = [
		<option key='default'>{label}</option>
	]) {
		if (endCond(first, last)) {
			return prevOpts;
		}
		const currOpts = prevOpts.concat(
			<option key={first} value={first}>{first}</option>
		);
		return optionRangeFn(changeToFirst(first), last, label, currOpts);
	}
}

export const createAscendingOptionsRange = createOptionsRangeFn(
	(first, last) => first > last,
	first => first + 1
);

export const createDescendingOptionsRange = createOptionsRangeFn(
	(first, last) => first < last,
	first => first - 1
);