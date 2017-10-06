/**
 * esse './todo' é justamente o que exportamos no arquivo todo.js
 */
const Todo = require('./todo')

/**
 * get: busca
 * post: insere
 * put: atualiza
 * delete: apaga
 */
Todo.methods(['get', 'post', 'put', 'delete'])

/**
 * por padrão o update não valida algumas coisas, então
 * por exemplo: padrão, quando executamos um update em um objeto, 
 *      o node restful responde retornando o objeto antigo, sem a alteração
 *      e não queremos isso, queremos que o novo objeto seja retornado
 *      contendo o que alteramos nele. Por isso o 'new: true'
 * 
 * Já o 'runValidators: true' é apenas para o node restful fazer as validações
 * que informamos no arquivo todo.js utilizando o 'required'    
 * 
 */
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo