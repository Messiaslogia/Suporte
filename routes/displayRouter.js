var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/index', (req,res)=>{
  res.render('display/index')
})

router.get('/calibracao', (req,res) =>{
  console.log(Display)
  res.render('Display/calibracao', Display.artigos.calibracao);
})

router.get('/download', (req,res) =>{
  console.log(Display)
  res.render('Display/download', Display.artigos.download);
})

router.get('/instalacao', (req,res) =>{
  console.log(Display)
  res.render('Display/instalacao', Display.artigos.instalacao);
})



module.exports = router;
