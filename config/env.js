require('dotenv/config');

const env = {
    'API_URL': process.env.API_URL || '/api/v1',
    'DB_URL': process.env.CONNECTION_STRING,
    'PORT': process.env.PORT || 3000
}

module.exports = env;