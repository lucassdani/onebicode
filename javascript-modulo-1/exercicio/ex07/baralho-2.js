const baralho = []
let opção = ''

do {
    opção = prompt(
        `cartas do baralho: ${baralho.length}
        \n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair`
    )

    switch (opção) {
        case '1':
            const novaCarta = prompt(`Qual é a carta?`)
            baralho.push(novaCarta)
            break
        case '2':
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert(`Não há nenhuma carta no baralho`)
            } else {
                alert(`Você puxou um(a) ${cartaPuxada}`)
            }
            break
        case '3':
            alert(`Saindo...`)
            break
        default:
            alert(`Opção inválida!`)
    }
} while (opção !== '3')