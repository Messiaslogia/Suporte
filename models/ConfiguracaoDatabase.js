const mySql = require('mysql2');

 function conexaoDB() {
    const conexao =  mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'suporte'
    });
    return conexao;
}

module.exports = { conexaoDB };