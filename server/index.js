const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = require('./routers/searchRouter');
const viewingsRouter = require('./routers/movieViewingsRouter');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Response Headers
app.use((req, res, next) => {
	res.header({
		// CORS
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
		'Access-Control-Allow-Headers': 'Content-Type, Accepts',

		// Cache Settings
		'Cache-Control': process.env.NODE_ENV === 'development'
			? 'no-cache, must-revalidate'
			: undefined,
	});
	next();
})

app.use(express.static('public'));
app.use(express.static('dist'));
app.use('/viewings', viewingsRouter);
app.use('/search', searchRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app