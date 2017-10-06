module.exports = function (req, res, next) {
    /**
     * estamos adicionando os cabeçalhos na resposta que será enviada para o browser
     */
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() //chama a próxima função, senão iria travar a aplicação aqui
}