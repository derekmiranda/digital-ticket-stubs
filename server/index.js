const path = require('path');
const express = require('express');
const config = require('../shared/config');

const app = express();

app.use(express.static('public'));

app.listen(config.port);
