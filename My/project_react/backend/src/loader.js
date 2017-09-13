const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) //(server) é passado aqui como parametro