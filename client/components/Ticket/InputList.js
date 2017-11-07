import React from 'react';
import PropTypes from 'prop-types';

import Watchtime from './Watchtime';
import { viewingSchema } from 'schemas';
import getReadableFieldName from 'client/utils/getReadableFieldName';

const createOnChange = ({ editFn, id, key }) => event => editFn({
	id,
	key,
	val: event.target.value
})

const InputList = ({
  viewing = {},
  onEdit,
  onWatchtimeEdit,
}) => {
  const textFields = ['title', 'venue'];
  const textInputs = textFields.map(textFieldToInput);
  
  function textFieldToInput(field) {
		const onChange = createOnChange({
      editFn: onEdit,
      id: viewing.id,
      key: field,
    });
		const val = viewing[field];
		const readableField = getReadableFieldName(field);
	
		return (
			<input type="text"
				onChange={onChange}
				placeholder={readableField}
				value={val}
				name={field}
				className={field}
				key={field}
			/>
		)
  }

	const inputs = textInputs.concat(
    <Watchtime
      onWatchtimeEdit={onWatchtimeEdit}
      id={viewing.id}
      key="watchtime"
    />
	);

	return inputs;
}

InputList.propTypes = {
  viewing: PropTypes.shape(viewingSchema),
  onEdit: PropTypes.func.isRequired,
  onWatchtimeEdit: PropTypes.func.isRequired,
}

export default InputList;