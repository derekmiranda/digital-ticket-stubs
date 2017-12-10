import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bgColor, mainTextColor } from 'constants';

const StyledList = styled.ol`
  background-color: ${bgColor};
  padding: 0;
  position: fixed;
  height: 25%;
  overflow: scroll;

  a {
    color: ${mainTextColor}
  }

  li {
    border: 1px solid black;
  }
`


const SearchResults = ({ results }) => {
  const rows = results.map((result, idx) => {
    const { title } = result;
    return (
      <li key={idx}>
        <a href='javascript:;'>{title}</a>
      </li>
    )
  })

  return rows.length
    ? <StyledList>
        {rows}
      </StyledList>
    : <p style={{ color: 'aqua' }}>No movies found</p>
}

SearchResults.propTypes = {
  results: PropTypes.array,
}

export default SearchResults;