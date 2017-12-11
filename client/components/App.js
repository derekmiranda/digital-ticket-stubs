import React from 'react';
import styled from 'styled-components';

import ViewingsFormContainer from 'containers/ViewingsFormContainer';
import Attribution from './Attribution';
import { bgColor, mainTextColor } from 'constants';
import { forMobile } from 'client/utils/styleUtils';

const Container = styled.main`
	padding: 3em;

	${forMobile(`
		padding: 1.5em;
	`)}
	
	height: 100%;
	background-color: ${bgColor};
	color: ${mainTextColor};
	font-family: Helvetica, sans-serif;
	text-align: center;
	overflow: auto;
`

const App = () => {
	return (
		<Container>
			<h1>Digital Ticket Stubs</h1>
			<ViewingsFormContainer />
			<Attribution />
		</Container>
	)
}

export default App;