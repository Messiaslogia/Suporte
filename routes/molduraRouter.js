const MolduraController = require('../controllers/molduraController')
const PesquisaArtigoDatabase = require('../models/PesquisaArtigosDataBase')

const molduraController = new MolduraController();
const pesquisaArtigoDatabase = new PesquisaArtigoDatabase();

const express = require('express');
const router = express.Router();

router.get('/index', molduraController.carregarIndex)

router.get('/pesquisa/:palavra_chave',  async(req,res) => {   
  const palavra_chave = req.params.palavra_chave;
  const valores = palavra_chave.split(',');

  pesquisaArtigoDatabase.filtroDePesquisas(valores, (results) => {
    res.json(results)
  });
})

module.exports = router;

