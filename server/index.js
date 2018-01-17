const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const searchRouter = require('./routers/searchRouter');
const viewingsRouter = require('./routers/movieViewingsRouter');

const port = process.env.PORT || 3000;
const app = express();

// parse POST reqs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// log requests
app.use(morgan('tiny'))

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

// only serve SPA from non-REST API urls
app.get('*', (req, res, next) => {
	return res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app