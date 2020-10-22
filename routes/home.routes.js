const router = require('express').Router();
const { home, quotes } = require('../controllers')

router.get('/', home.index);
router.get('/about', home.about);

module.exports = router;