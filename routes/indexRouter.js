const IndexController = require('../controllers/indexController')
const indexController = new IndexController()

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.carregarIndex);

module.exports = router;
