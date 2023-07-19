const SinalController = require('../controllers/sinalController')
const sinalController = new SinalController()

var express = require('express');
var router = express.Router();

/* GET home page sinal. */
router.get('/index', sinalController.carregarIndex)


module.exports = router;
