import React from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import styled from 'styled-components';

import ViewingsFormContainer from 'containers/ViewingsFormContainer';
import RegisterPage from './RegisterPage'
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
	font-family: Futura, sans-serif;
	text-align: center;
	overflow: auto;
`

const RouterViewingsFormContainer = withRouter(ViewingsFormContainer)

const App = () => (
	<Router>
		<Container>
			<h1>Digital Ticket Stubs</h1>
			<Route exact path='/' component={RegisterPage} />
			<Route exact path='/stubs' render={RouterViewingsFormContainer} />
			<Attribution />
		</Container>
	</Router>
)

export default App;