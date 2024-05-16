let pokemon = 'charmander'

function evoluir() {
    pokemon = 'charmileon'
}

// console.log(pokemon)
// evoluir()
// console.log(pokemon)

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = 'aprovado'
    }else {
        var aprovado = false
        let situacao = 'reprovado'
    }

    console.log(nota)
    consol.log(aprovado)
    console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)