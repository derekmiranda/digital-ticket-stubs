import React from 'react';
import { tmdbLogo, tmdbPrimaryColor } from 'constants';

export default () => (
	<footer style={{ display: 'inline-block' }}>
		<img style={{
			width: '25%',
			height: '25%',
		}} src={tmdbLogo} />
		<p style={{ color: tmdbPrimaryColor }}>
			This product uses the TMDb API but is not endorsed or certified by TMDb.
		</p>
	</footer>
)