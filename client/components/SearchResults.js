import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {
  const rows = results.map((result, idx) => {
    const { title } = result;
    return (
      <li key={idx}>
        <a>{title}</a>
      </li>
    )
  })

  return rows.length
    ? <ol>
        {rows}
      </ol>
    : <p style={{ color: 'aqua' }}>No movies found</p>
}

SearchResults.propTypes = {
  results: PropTypes.array,
}

export default SearchResults;