import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bgColor, mainTextColor, hoverTextColor } from 'constants';
import { getThumbImg } from '../utils/imgUtils';
import { forDesktop, forMobile, forTablet } from '../utils/styleUtils'

const StyledList = styled.ol`
  color: #eee;
  background-color: rgba(100,100,100,.8);
  padding: 0;
  position: fixed;
  overflow: scroll;
  max-height: 50%;
  border: 1px solid black;

  li:not(:first-child) {
    border-top: 1px solid black;  
  }
`

const hoverStyles = `
  color: white;
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
  margin: 5px auto;
`

const SearchResults = ({ results, chooseMovie }) => {
  const rows = results.map((result, idx) => {
    const { title, poster_path, overview } = result;
    const thumbnail = poster_path && (
      <img src={getThumbImg(poster_path)} />
    )

    return (
      <StyledLi onClick={chooseMovie} key={idx}>
        {thumbnail}        
        <TitleSpan title={overview}>{title}</TitleSpan>
      </StyledLi>
    )
  })

  return rows.length
    ? <StyledList ref={(elem) => {
        if (elem) {
          const parent = elem
          console.log(parent)
        }
      }}>
        {rows}
      </StyledList>
    : <p style={{ color: 'aqua' }}>No movies found</p>
}

SearchResults.propTypes = {
  results: PropTypes.array,
}

export default SearchResults;