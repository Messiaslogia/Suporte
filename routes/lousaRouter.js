var express = require('express');
var router = express.Router();
// var Lousa = require('../models/lousa.js')


/* GET home page. */

router.get('/index', (req,res)=>{
  res.render('lousa/index')  
})

router.get('/calibracao', (req,res) =>{
  res.render('Lousa/calibracao' );
})

router.get('/download', (req,res) =>{
  res.render('Lousa/download' );
})

router.get('/instalacao', (req,res) =>{
  res.render('Lousa/instalacao' );
})




module.exports = router;
