const router = require('express').Router();
const { quotes } = require('../controllers')


router.get('/quotes', quotes.index)
router.get('/quotes/all', quotes.get)
router.post('/quotes', quotes.add)

module.exports = router;