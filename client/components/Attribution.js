import React from 'react';
import { tmdbLogo } from 'constants';

export default () => (
	<footer>
		<img style={{
			width: '25%',
			height: '25%',
		}} src={tmdbLogo} />
		<p style={{ color: '#081c24' }}>
			This product uses the TMDb API but is not endorsed or certified by TMDb.
		</p>
	</footer>
)