const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
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
    res.json({
        message: 'Yoh! you made it here',
        doc: 'https://github.com/vincentiroleh/zuri-task-6'
    })
});


module.exports = app;
