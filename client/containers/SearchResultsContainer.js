import React from 'react';
import { connect } from 'react-redux';

import SearchResults from 'components/SearchResults';

const mapStateToProps = ({ searchResults }, { idx }) => {
  const results = searchResults && searchResults[idx]
  return { results }
}

const mapDispatchToProps = {
  chooseMovie: () => console.log('choose movie')
}

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)

export default SearchResultsContainer