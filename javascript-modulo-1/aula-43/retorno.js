function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }
    return produto
}

//console.log(criarProduto('notebook intel core i3 8GB', 2500))

function areaRetangular(base, altura) {
    return base * altura
}

function areQuadrada(lado) {
    return areaRetangular(lado, lado)
}

//console.log(areaRetangular(3, 5))

//console.log(areQuadrada(9))

function ola() {
    let texto = '...'
    return texto
    texto = 'olá mundo'
    console.log(texto)
}

console.log(ola())

function maioridade(idade) {
    if (idade >= 18) {
        return 'maior de idade'
    }else {
        return 'menor de idade'
    }
}

console.log(maioridade(29))
console.log(maioridade(13))