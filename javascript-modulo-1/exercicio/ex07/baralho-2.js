let baralho = []
let opcao = ''
do {
    let cartas = 0
    if (cartas < baralho.length) {
        cartas = baralho.length
    }
    
    opcao = prompt(
        `quantidade de cartas: ${cartas}
        \nescolha uma das opções abaixo
        \n1. Adicionar Carta
        \n2. Puxar Carta
        \n3. Sair`
    )
    switch (opcao) {
        case '1':
            let adicionarCarta = prompt('qual o nome da carta?')
            baralho.push(adicionarCarta)
            break
        case '2': 
        if (baralho.length > 0) {
            let cartarPuxada = baralho.pop()
            alert(`a carta ${cartarPuxada} foi retirada`)
        }else {
            alert('Não tem nenhuma carta no baralho!')
        }
            break
        case '3':
            alert('encerrando...')
            break
        default:
            alert('opção inválida!')
            break
    }

} while (opcao !== '3')