class indexController{
    carregarIndex(req, res){
        res.render('index', { title: 'Express' })
    }
}

module.exports = indexController