const produto = {
    nome: 'Caneta bic preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta bic azul'

console.log(produto, novoProduto)