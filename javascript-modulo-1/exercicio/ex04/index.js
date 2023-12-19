const turista = prompt('e ai, turista! qual o seu nome?')
let cidades = ''
let contagem = 0

let continuar = prompt('você visitou alguma cidade? (s/n)')

while (continuar = 's') {
    let cidade = prompt('qual o nome da cidade visitada?')
    cidades += ' - ' + cidade + '\n'
    contagem++
    continuar = prompt('você visitou alguma outra cidade? (s/n)')
}

alert(
    'turista: ' + turista +
    '\nquantidade de cidades visitadas: ' + contagem +
    '\ncidades visitadas:\n' + cidades
)