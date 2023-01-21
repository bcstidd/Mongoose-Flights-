var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
/* GET users listing. */
router.get('/new', ticketsCtrl.new);
// router.get('/:id', ticketsCtrl.show);
router.post('/tickets/:id', ticketsCtrl.create);

module.exports = router;