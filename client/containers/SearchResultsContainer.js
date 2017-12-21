import React from 'react';
import { connect } from 'react-redux';

import SearchResults from 'components/SearchResults';

const mapStateToProps = ({ searchResults }, { idx }) => {
  const results = searchResults && searchResults[idx]
  return { results }
}

const SearchResultsContainer = connect(mapStateToProps)(SearchResults)

export default SearchResultsContainer