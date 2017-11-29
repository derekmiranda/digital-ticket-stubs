import React from 'react';
import styled from 'styled-components';

import ViewingsFormContainer from 'containers/ViewingsFormContainer';
import Attribution from './Attribution';

const Container = styled.main`
	font-family: Helvetica, sans-serif;
	text-align: center;
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