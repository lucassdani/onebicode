const turista = prompt('e ai, turista! qual o seu nome?')
let cidades = ''
let contagem = 0

let continuar = prompt('voce visitou alguma cidade? (s/n)')

while (continuar === 's') {
    let cidade = prompt('qual é o nome da cidade visitada')
    cidades += ' - ' + cidade + '\n'
    contagem++
    continuar = prompt('voce visitou alguma outra cidade? (s/n)')
}

alert(
    'turista: ' + turista +
    '\nquantidades de cidades visitadas: ' + contagem +
    '\ncidades visitadas:\n' + cidades
)