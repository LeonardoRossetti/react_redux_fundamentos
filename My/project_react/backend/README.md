# Criação do projeto

### Criar o package.json padrão
```
npm init -y
```

## Instalar dependencias
#### Body-parser
[Body-parser](https://github.com/expressjs/body-parser) serve para fazer o parser dos formulários e dos objetos json das requisições que vamos receber para objeto javascript.
#### Express
[Express](http://expressjs.com/) é um framework web.
#### Mongoose
[Mongoose](http://mongoosejs.com/) é o responsável por fazer a conexão com o banco de dados. Ele faz o mapeamento objeto-documento
#### Node-restful
[Node-restful](https://github.com/baugarten/node-restful) Serve para facilitar a criação dos webservices
#### PM2
[PM2](http://pm2.keymetrics.io/) controla a nossa aplicação, o uso de memória/processador. Caso a aplicação caia, ele restarta a aplicação de novo. Vamos startar a aplicação atravez dele. 
#### Nodemon
[Nodemon](https://nodemon.io/) faz praticamente a mesma coisa que o PM2, porém é menos robusto, vamos usá-lo apenas durante o desenvolvimento.

```
npm i --save-dev body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5 nodemon@1.11.0
```


## Passo a passo 
* Alterar o packaje.json: 
	```
	//esse é o arquivo que vai startar a nossa aplicação
	 "main": "src/loader.js" 
	//'project_backend' é o nome que vai aparecer no painel de monitoramento do PM2
	 "scripts": {
		"dev": "nodemon", //npm run dev
		"production": "pm2 start src/loader.js --name project_backend"  //npm run production
	}
	```
* Criado o arquivo **.gitignore**
* Criado arquivo **src/loader.js**
* Criado o arquivo **src/config/server.js**
* Criado o arquivo **src/api/todo/todo.js**
* Criado o arquivo **src/api/todo/todoService.js**
* Criado o arquivo **src/api/config/database.js**
* Criado o arquivo **src/api/config/routes.js**
* Baixamos o [Postman](https://www.getpostman.com/)
* Necesário que tanto o mongo esteja iniciado, como também a nossa aplicação
* Requisições
    * http://localhost:3004/api/Todos (Modo GET para retornar)
* POST:
    * http://localhost:3004/api/Todos (Modo POST para incluir um registro)
    Ir em Body -> Selecionar: x-www.form-urlencoded
    * Selecionar Bulk-edit (para inserir os comandos manualmente)
    inserir: description: Pagar conta do cartão
    Obs.: necessáro passar o parametro 'description' pois foi isso que definimos no arquivo **src/api/todo/todo.js**. Os demais parametros, ou tem um valor default, ou não são obrigatórios
    * Ao clicar em Send será inserido o registro
* PUT
    * http://localhost:3004/api/Todos/:id (Modo PUT para alterar um registro, ID é o parametro)
    Ir em Body -> Selecionar: x-www.form-urlencoded
    * Selecionar Bulk-edit (para inserir os comandos manualmente)
    inserir: 
    done: true
    description: Atualizada
* GET
    http://localhost:3004/api/Todos?sort=-createdAt
    Isso irá retornar os registros de forma descrescente pela data de inserção
    \n
    http://localhost:3004/api/Todos?sort=-createdAt&description__regex=/conta/
    Isso irá também aplicar um regex e trazer apenas os registros cuja descrição contenha a palavra 'conta'