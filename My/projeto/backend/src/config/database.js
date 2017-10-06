/*
Esse arquivo é onde vai ter os dados de acesso da nossa base

*/
/**mongoose vai servir tanto pra fazer o mapeamento
 * dos nossos objetos para documentos que irã para o mongo
 * como também para fazer/abrir uma conexão com o mongo
 * e mandar os comandos de CRUD para lá
 */
const mongoose = require('mongoose')

/**aqui dizemos que o mongoose irá usar a API de 
 * promisses do próprio Node, fazemos isso apenas para
 * não exibir a mensagem de que a API do mongoose está depreciada.
 * Nada mais muda além disso.
 */
 mongoose.Promise = global.Promise

 module.exports = mongoose.connect('mongodb://localhost/todo')