# Criação do projeto

### Criar o package.json padrão
```
npm init -y
```

## Instalar dependencias
#### Body-parser
Serve para fazer o parser dos formulários e dos objetos json das requisições que vamos receber para objeto javascript.
#### Express
[Express](http://expressjs.com/) é um framework web.
#### Mongoose
Ele é o responsável por fazer a conexão com o banco de dados. Ele faz o mapeamento objeto-documento
#### Node-restful
Serve para facilitar a criação dos webservices
#### PM2
Vamos startar a aplicação atravez dele. Ele controla a nossa aplicação, uso de memória/processador. Caso a aplicação caia, ele restarta a aplicação de novo.
#### Nodemon
Nodemon faz praticamente a mesma coisa que o PM2, porém é menos robusto, vamos usá-lo apenas durante o desenvolvimento.

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


