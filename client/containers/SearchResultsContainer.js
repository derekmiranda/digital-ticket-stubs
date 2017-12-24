import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form'

import SearchResults from 'components/SearchResults';
import { chooseMovie } from 'actions/creators'
import { ticketsFormName } from 'constants'

const formValueSelector = getFormValues(ticketsFormName)

const mapStateToProps = (state, { idx }) => {
  const { searchResults } = state
  const results = searchResults && searchResults[idx]
  const { viewings } = formValueSelector(state)
  const { formId } = viewings && viewings[idx]
  return { results, formId }
}

const mapDispatchToProps = {
  chooseMovie,
}

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)

export default SearchResultsContainer