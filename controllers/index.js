const { quotes } = require('./quotes.controller');

module.exports = {
    home: require('./home.controller'),
    quotes: require('./quotes.controller')
};