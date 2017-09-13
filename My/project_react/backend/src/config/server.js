const port = 3004

//ele que faz a conversão das requisições
const bodyParser = require('body-parser')
//express é um servidor web que roda em cima do nodeJs
const express = require('express')
const server = express()

/*ativando a função extended e assim mais padrões de dados 
serão aceitos*/
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

/*O Express funciona como um middleware. 
É como se vc tivesse trabalhando com uma cadeia de requisições
Nesse código acima configuramos um middleware onde todas as requisições
recebidas no nosso servidor passarão por esse middleware
*/


server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server