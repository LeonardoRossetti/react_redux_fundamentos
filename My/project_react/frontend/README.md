# Criação do projeto
==
* Criar packaje.json padrão
```
npm init -y
```

## Instalar dependencias
--
* Webpack
```
npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2
```
* Babel
```
npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0
```

* Para os arquivos css
O 'extract-text-webpack-plugin' irá extrair os textos dos arquivos css para jsuamente passar pelo processo em cima dos nossos css através do 'css-loader' e do 'style-loader'. Já o 'file-loader' serve para carregar as imagens e fontes.
```
npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0
```

* Templates
```
npm i --save-dev bootstrap@3.3.7 font-awesome@4.7.0
```

* React
O Axios é o que faz a parte de consumir a aplicação backend
```
npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3
```
--
## Passo a passo
* Criado o arquivo **webpack.config.js**