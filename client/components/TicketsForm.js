import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FieldArray } from 'redux-form'
import curry from 'lodash/curry'
import styled from 'styled-components'

import TicketContainer from 'containers/TicketContainer'
import getReadableFieldName from 'client/utils/getReadableFieldName'
import { forMobile, forTablet, forDesktop } from 'client/utils/styleUtils'
import debug from 'client/utils/debug'

const StyledTicketsForm = styled.form`
	margin: 3em 0 3em;
	
	ul {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-gap: 2em;

		${forMobile(`
			grid-template-columns: repeat(1, 1fr);
		`)}
		
		${forTablet(`
			grid-template-columns: repeat(2, 1fr);
		`)}

		${forDesktop(`
			grid-template-columns: repeat(3, 1fr);
		`)}

		padding: 0;
	}

	li {
		list-style: none;
	}

	.submitting {
		color: mediumaquamarine;
	}

	.loading {
		color: green;
	}
`

const AccountQuestion = () => {
  const registerLink = <Link to="/register">Register</Link>
  const loginLink = <Link to="/login">Login</Link>

  return (
    <h3>
      {registerLink} {' or '} {loginLink} {'?'}
    </h3>
  )
}

const renderTicketsForm = ({
  fields,
	handleSubmit,
	loggedIn,
  meta: { submitting, submitFailed }
}) => {
  return (
		<div id="tickets-form" style={{ marginTop: '2em' }}>
			{!loggedIn && <AccountQuestion />}
      <ul>
        {fields.map((member, idx) => {
          return (
            <li key={idx}>
              <TicketContainer name={member} idx={idx} />
            </li>
          )
        })}
      </ul>
      {submitting && <p className="submitting">Saving all stubs...</p>}
    </div>
  )
}

const createSortButton = curry((handleChange, value) => (
  <button type="button" value={value} onClick={() => handleChange(value)}>
    {getReadableFieldName(value)}
  </button>
))

const TicketsForm = ({ handleSubmit, loading, addTicket, sortTickets }) => {
  const createSortButtonWithTarget = createSortButton(sortTickets)
  const titleSortBtn = createSortButtonWithTarget('title')
  const venueSortBtn = createSortButtonWithTarget('venue')
  const watchtimeSortBtn = createSortButtonWithTarget('watchtime')

  const loadingMsg = <p className="loading">Loading...</p>

  return (
    <StyledTicketsForm>
      <div id="sort">
        <strong>Sort by:</strong>
        {titleSortBtn}
        {venueSortBtn}
        {watchtimeSortBtn}
      </div>
      <div id="stub-btns">
        <button type="button" id="add-ticket" onClick={addTicket}>
          + Add Stub
        </button>
      </div>
      {loading ? (
        loadingMsg
      ) : (
        <FieldArray
          name="viewings"
          component={renderTicketsForm}
          props={{ handleSubmit }}
        />
      )}
    </StyledTicketsForm>
  )
}

TicketsForm.propTypes = {
  handleTicketSubmit: PropTypes.func
}

export default TicketsForm
