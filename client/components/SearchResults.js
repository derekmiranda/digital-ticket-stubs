import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bgColor, mainTextColor, hoverTextColor } from 'constants';
import { getThumbImg } from '../utils/imgUtils';
import { forDesktop, forMobile, forTablet } from '../utils/styleUtils'
import DetectOutsideClickOl from './DetectOutsideClickOl'

const StyledList = styled(DetectOutsideClickOl)`
  color: #eee;
  background-color: rgba(100,100,100,.8);
  padding: 0;
  position: absolute;
  overflow: scroll;
  width: 100%;
  max-height: calc(2 * 68px);
  border: 1px solid black;
  z-index: 1;

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

const SearchResults = ({ results, formId, chooseMovie }) => {
  if (!results) return null

  const rows = results.map((result, idx) => {
    const { title, poster_path, backdrop_path, overview } = result;
    const thumbnail = poster_path && (
      <img src={getThumbImg(poster_path)} />
    )
    const handleClick = () => chooseMovie({
      poster_path,
      backdrop_path,
      formId,
    })

    return (
      <StyledLi onClick={handleClick} key={idx}>
        {thumbnail}        
        <TitleSpan title={overview}>{title}</TitleSpan>
      </StyledLi>
    )
  })

  return rows.length
    ? <StyledList handleClickOut={() => console.log('AHHH')}>
        {rows}
      </StyledList>
    : <p style={{ color: 'aqua' }}>No movies found</p>
}

export default SearchResults;