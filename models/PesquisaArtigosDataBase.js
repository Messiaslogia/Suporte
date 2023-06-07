const { conexaoDB } = require('../models/ConfiguracaoDatabase');

class PesquisaArtigoDatabase{

    conexao = conexaoDB();

    /**
     * Método responsavél por filtrar as pesquisas de artigos no input do cabeçalho das paginas
     * @param {string} valoresPesquisa 
     * @param {callback} callback 
     * @returns {Object}
     */
    filtroDePesquisas(valoresPesquisa, callback) {
        let sql = 'SELECT titulo_artigo, url FROM artigos WHERE ';
        let params = [];

        for (let i = 0; i < valoresPesquisa.length; i++) {
            sql += 'titulo_artigo LIKE ? ';
            params.push(`%${valoresPesquisa[i]}%`);
            if (i < valoresPesquisa.length - 1) {
                sql += 'OR ';
            }
        }
        this.conexao.query(sql, params, (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
}


module.exports = PesquisaArtigoDatabase