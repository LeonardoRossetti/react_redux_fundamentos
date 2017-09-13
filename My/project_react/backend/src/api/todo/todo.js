/**
 * aqui é onde eu vou mapear o meu objeto para um documento mongo
 * o require pode ser feito usando apenas o nome da biblioteca pois essa biblioteca está dentro do node_modules
 * Quando eu quero importar algo referente a minha aplicação eu uso o padrão relativo './', ex.: require('./config/server')
 */
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    //descricao da minha tarefa
    description: { type: String, required: true },
    //se concluiu a tarefa o done fica como true, senao false
    done: { type: Boolean, required: true, default: false },
    //data que ele registrou essa pendencia/tarefa para eu poder ordenar pelas mais novas
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)