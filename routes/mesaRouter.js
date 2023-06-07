var express = require('express');
var router = express.Router();
// var Mesa = require('../models/mesa.js')


/* GET home page. */

router.get('/index', (req,res)=>{
  res.render('mesa/index')
})

router.get('/calibracao', (req,res) =>{
  console.log(Mesa)
  res.render('Mesa/calibracao', Mesa.artigos.calibracao);
})

router.get('/download', (req,res) =>{
  console.log(Mesa)
  res.render('Mesa/download', Mesa.artigos.download);
})

router.get('/instalacao', (req,res) =>{
  console.log(Mesa)
  res.render('Mesa/instalacao', Mesa.artigos.instalacao);
})



module.exports = router;
