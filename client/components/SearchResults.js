import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bgColor, mainTextColor, hoverTextColor } from 'constants';
import { getThumbImg } from '../utils/imgUtils';

const StyledList = styled.ol`
  background-color: ${bgColor};
  padding: 0;
  position: fixed;
  height: 25%;
  overflow: scroll;
  border: 1px solid black;

  a {
    color: ${mainTextColor}
  }
`

const StyledLi = styled.li`
  cursor: pointer;
  border-bottom: 1px solid black;

  &:hover {
    color: ${hoverTextColor};
  }
`

const SearchResults = ({ results, chooseMovie }) => {
  const rows = results.map((result, idx) => {
    const { title, poster_path } = result;
    const thumbnail = poster_path && (
      <img src={getThumbImg(poster_path)} />
    )

    return (
      <StyledLi onClick={chooseMovie} key={idx}>
        {thumbnail}        
        <span>{title}</span>
      </StyledLi>
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