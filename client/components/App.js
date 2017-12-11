import React from 'react';
import styled from 'styled-components';

import ViewingsFormContainer from 'containers/ViewingsFormContainer';
import Attribution from './Attribution';
import { bgColor, mainTextColor } from 'constants';

const Container = styled.main`
	padding: 3em;
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