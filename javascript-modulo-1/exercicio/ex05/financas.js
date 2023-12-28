let saldo = parseFloat(prompt('informe a quantidade de dinheiro inicial:'))
let opcao = ''

do {
    opcao = prompt(
        'saldo diponivel: R$ ' + saldo +
        '\n1. adicionar dinheiro' +
        '\n2. remover  dinheiro' +
        '\n1. sair'
    )

    switch (opcao) {
        case '1': 
            saldo += parseFloat(prompt('informe o valor a ser adicionado:'))
            break
        case '2':
            saldo -= parseFloat(prompt('informe o valor a ser removido:'))
            break
        case '3':
            alert('saindo...')
            break
        default:
            alert('opção invalida!')
    }
} while (opcao !== '3')