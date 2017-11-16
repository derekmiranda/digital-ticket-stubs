const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = require('./routers/searchRouter');
const viewingsRouter = require('./routers/movieViewingsRouter');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
	res.header({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
		'Access-Control-Allow-Headers': 'Content-Type, Accepts',
	});
	next();
})

app.use(express.static('public'));
app.use('/viewings', viewingsRouter);
app.use('/search', searchRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
