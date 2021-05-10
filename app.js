const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const createError = require('http-errors')
const app = express();

const api = require('./config/env').API_URL;

app.use(cors());
app.options('*', cors());

require('./config/mongoose'); // db connection

// middleware
app.use(helmet())
app.use(express.json()); // bodyParser
app.use(logger('dev')); // morgan logger
app.use(`${api}`, require('./api/index')); // routers

app.get('*', (req, res) => {
    res.status(400).json({
        message: 'Resource in search not available, check our doc',
        doc: 'https://github.com/vincentiroleh/zuri-task-6'
    })
});

module.exports = app;
