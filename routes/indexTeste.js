var express = require('express');
var router = express.Router();
const { conexaoDB } = require('../models/ConfiguracaoDatabase');

router.get('/index', (req, res) => {
    res.render('moldura/m_index');
})

router.get('/pesquisa/:palavra_chave', async (req, res) => {
    const palavra_chave = req.params.palavra_chave;
    const valores = palavra_chave.split(',');
    const conexao = conexaoDB();

    let sql = 'SELECT titulo_artigo, url FROM artigos WHERE ';
    let params = [];

    for (let i = 0; i < valores.length; i++) {
        sql += 'titulo_artigo LIKE ? ';
        params.push(`%${valores[i]}%`);
        if (i < valores.length - 1) {
            sql += 'OR ';
        }
    }

    conexao.query(sql, params, (error, results) => {
        if (error) throw error;
        res.json(results)
    });
})

module.exports = router;

