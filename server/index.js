const path = require('path');
const express = require('express');

const searchRouter = require('./routers/searchRouter');
const viewingsRouter = require('./routers/movieViewingsRouter');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use('/viewings', viewingsRouter);
app.use('/search', searchRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
