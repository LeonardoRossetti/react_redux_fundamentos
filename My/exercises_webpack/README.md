# Passos para a criação do projeto

### Criar o packaje.json padrão ###
`npm init -y`

## Instalar dependencias
### Body-parser ###
Serve para fazer o parser dos formulários e dos objetos json das requisições que vamos receber para objeto javascript.
### Express ###
É um framework web.
### Mongoose ###
Ele é o responsável por fazer a conexão com o banco de dados. Ele faz o mapeamento objeto-documento
### Node-restful ###
Serve para facilitar a criação dos webservices
### PM2 ###
Vamos startar a aplicação atravez dele. Ele controla a nossa aplicação, uso de memória/processador. Caso a aplicação caia, ele restarta a aplicação de novo.
### Nodemon ###
Nodemon faz praticamente a mesma coisa que o PM2, porém é menos robusto, vamos usá-lo apenas durante o desenvolvimento.

`npm i --save-dev body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5 nodemon@1.11.0`


## Passo a passo 
1. Alterar o packaje.json: 
 - "main": "src/loader.js" //esse é o arquivo que vai startar a nossa aplicação
 - "scripts": {
     "dev": "nodemon",
     "production": "pm2 start src/loader.js --name project_backend" //'project_backend' é o nome que vai aparecer no painel de monitoramento do PM2
 }
2. Criado o arquivo .gitignore
3. Cria a pasta 'src' e dentro dela o arquivo 'loader.js'