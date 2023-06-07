var express = require('express');
var router = express.Router();
// var Sinal = require('../models/sinal.js')


/* GET home page. */

router.get('/index', (req,res)=>{
  res.render('sinal/index')
})


module.exports = router;
