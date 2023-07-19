const LousaController = require('../controllers/lousaController')
const lousaController = new LousaController() 

var express = require('express');
var router = express.Router();

router.get('/index', lousaController.carregarIndex )

module.exports = router;
