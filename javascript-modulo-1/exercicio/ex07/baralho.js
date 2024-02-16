const baralho = []
let opcao = ''

do {
    opcao = prompt(
        `cartas do baralho: ${baralho.length} \n1. adicionar uma carta\n2. puxar uma carta\n3. sair`
    )

    switch (opcao) {
        case '1':
            const novaCarta = prompt('qual é carta:')
            baralho.push(novaCarta)
            break
        case '2':
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert('não há nenhuma carta no baralho')
            } else {
                alert(`você puxou um(a) ${cartaPuxada}`)
            }
            break
        case '3':
            alert('saindo...')
            break
        default:
            alert('opção inválida')
    }
} while (opcao !== '3')