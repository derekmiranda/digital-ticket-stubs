import React from 'react';
import { tmdbLogo, tmdbPrimaryColor } from 'constants';

export default () => (
	<footer style={{ display: 'inline-block', width: '60%', height: '10%', fontSize: '70%' }}>
		<img style={{
			height: '3em'
		}} src={tmdbLogo} />
		<p style={{ color: tmdbPrimaryColor }}>
			This product uses the TMDb API but is not endorsed or certified by TMDb.
		</p>
	</footer>
)