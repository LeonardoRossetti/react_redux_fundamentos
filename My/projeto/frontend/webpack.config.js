const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx', //ponto de entrada
    output: { //saida
        path: __dirname + '/public',
        filename: './app.js' //nome do arquivo
    },
    devServer: {
        port: 8081,
        contentBase: './public', 
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], //extensoes que ele vai precisar reconhecer
        alias: {
            /**
             * essa configuração permite que eu use o que está dentro da pasta node_modules
             * apenas referenciando com 'modules.<o que eu quiser referenciar>'
             */
            modules: __dirname + '/node_modules' 
        }
    },
    plugins: [
        //aqui eu informo qual é o arquivo que ele vai gerar a partir do parser que ele vai fazer
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,//vai fazer parses tanto de arquivos .js como tbm .jsx
            loader: 'babel-loader', //loader que será usado
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            /**
             * esse é um loader para css, que diz que os arquivos .css
             * passarão por esses dois outros plugins
             */
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            /**
             * para as fontes
             * par ao webpack conseguir interpretar e conseguir processar esses arquivos 
             * é preciso que ele reconheça esses 5 tipos de extensões diferentes
             * e reconheça como um arquivo 'file'
             */
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}