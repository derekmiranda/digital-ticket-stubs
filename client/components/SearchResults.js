import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bgColor, mainTextColor, hoverTextColor } from 'constants';
import { getThumbImg } from '../utils/imgUtils';

const StyledList = styled.ol`
  background-color: rgba(0,0,0,.3);
  padding: 0;
  position: fixed;
  overflow: scroll;
  max-height: 50%;
  border: 1px solid ${mainTextColor};

  li:not(:first-child) {
    border-top: 1px solid ${mainTextColor};  
  }

  a {
    color: ${mainTextColor};
  }
`

const hoverStyles = `
  color: #eee;
  background-color: rgba(0,0,0,.3);
`

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  cursor: pointer;

  &:hover {
    ${hoverStyles}
  }

  &:active {
    ${hoverStyles}
  }
`

const TitleSpan = styled.span`
  margin: 0 auto;
  padding: 5px;
`

const SearchResults = ({ results, chooseMovie }) => {
  console.log('results', results)
  const rows = results.map((result, idx) => {
    const { title, poster_path } = result;
    const thumbnail = poster_path && (
      <img src={getThumbImg(poster_path)} />
    )

    return (
      <StyledLi onClick={chooseMovie} key={idx}>
        {thumbnail}        
        <span style={{ margin: '0 auto' }}>{title}</span>
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