var express = require('express');
var router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

router.post('/tickets', ticketsCtrl.show);

module.exports = router;