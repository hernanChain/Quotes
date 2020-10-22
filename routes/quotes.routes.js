const router = require('express').Router();
const { quotes } = require('../controllers')


router.get('/quotes', quotes.index)
router.get('/quotes/all', quotes.get)

module.exports = router;