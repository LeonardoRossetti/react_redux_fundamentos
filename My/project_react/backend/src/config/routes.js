const express = require('express')

module.exports = function(server) {
    //API Routes
    /**
     * sempre que tiver server.use, isso é um middleware
     * Esse middleware é específico para urls que começam a aprtir de '/api'
     */
    const router = express.Router()
    server.use('/api', router) 


    //TODO Routes
    /**
     * Registra todas as urls relativas ao nosso webservice
     * para a entidade todo
     */
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/Todos')
}
