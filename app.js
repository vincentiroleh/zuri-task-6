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

app.get('/', (req, res) => {
    res.status(400).json({
        message: 'Welcome on board',
        doc: 'https://github.com/vincentiroleh/zuri-task-6'
    })
});

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;
