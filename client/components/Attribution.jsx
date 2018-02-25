import React from 'react';
import styled from 'styled-components';
import { tmdbLogo, tmdbPrimaryColor } from 'constants';

const StyledFooter = styled.footer`
	display: inline-block;
	width: 60%;
	height: 10%;
	font-size: 70%;
`

export default () => (
	<StyledFooter>
		<img style={{
			height: '3em'
		}} src={tmdbLogo} />
		<p style={{ color: tmdbPrimaryColor }}>
			This product uses the TMDb API but is not endorsed or certified by TMDb.
		</p>
	</StyledFooter>
)