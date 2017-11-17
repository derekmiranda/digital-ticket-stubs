export function objWithoutKey(obj, ...keySeq) {
	if (keySeq.length < 1) {
		return obj;
	}

	const firstKey = keySeq[0];
	if (keySeq.length === 1)	{
		return Object.keys(obj).reduce((newObj, key) => {
			if (key !== String(firstKey)) {
				newObj[key] = obj[key];
			} 
			return newObj;
		}, {})
	} else {
		return Object.assign({}, objWithoutKey(obj[firstKey], ...keySeq.slice(1)))
	}
}

export function reducerFromObj(obj = {}, initialState) {
	return (state = initialState, action = {}) => {
		const stateChange = obj[action.type];
		return typeof stateChange === 'function' ? stateChange(state, action) : state;	
	}	
}